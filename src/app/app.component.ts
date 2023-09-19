import {Component} from '@angular/core';
import {ApiService} from "./api/services/api-service";
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {Job} from "./api/models/Job";
import {DialogService} from "primeng/dynamicdialog";
import {JobComponent} from "./features/job/job.component";
import {ConfirmationService, MessageService} from "primeng/api";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ta4y';
  jobs$: Observable<Job[]>;

  constructor(private apiService: ApiService,
              private dialogService: DialogService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private sanitizer: DomSanitizer) {
    this.jobs$ = this.apiService.getJobs();
  }

  openJobDetail = (jobName: string | undefined) => this.dialogService.open(JobComponent, {data: {jobName}})

  openCreateJobDialog = () => this.dialogService.open(JobComponent, {});

  runJob = (jobName: string) => {
    this.messageService.add({ severity: 'success', summary: 'Job RUN', detail: 'Job run was successfully started' });
    return this.apiService.runJob(jobName).pipe(
      tap(() => {
        this.messageService.add({ severity: 'success', summary: 'Job RUN FINISHED', detail: 'Job run was successfully finished' });
      }),
      catchError(error => {
        this.messageService.add({ severity: 'error', summary: 'Job RUN', detail: 'An error occurred, please try to turn your computer on and off again' });
        return throwError(error); // Re-throw the error to propagate it to the next handler
      })
    ).subscribe();
  };

  deleteJob = (jobName: string) => {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this job?',
      accept: () => {
        this.apiService.deleteJob(jobName).pipe(
          tap(() => {
            // Job deletion was successful, show a success toast message
            this.messageService.add({
              severity: 'success',
              summary: 'Job Deleted',
              detail: 'The job was successfully deleted.',
            });
            location.reload();
          })
        ).subscribe();
      }
    });
  };


  getJobLog = (jobName: string) => {
    return this.apiService.getJobLog(jobName).pipe(
      catchError(error => {
        if (error.status === 500) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'There is no log file available at this moment. Test is still running or must be triggered first',
          });
        } else {
          console.error('An unexpected error occurred:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'There is no log file available at this moment.',
          });
        }
        return of(null);
      }),
      tap(htmlContent => {
        if (htmlContent) {
          const newWindow = window.open();
          if (newWindow) {
            newWindow.document.write(htmlContent);
            newWindow.document.close();
          } else {
            alert('Please allow pop-ups to view the HTML content.');
          }
        }
      })
    ).subscribe();
  };

}
