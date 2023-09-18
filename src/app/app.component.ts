import {Component} from '@angular/core';
import {ApiService} from "./api/services/api-service";
import {Observable, tap} from "rxjs";
import {Job} from "./api/models/Job";
import {DialogService} from "primeng/dynamicdialog";
import {JobComponent} from "./features/job/job.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ta4y';
  jobs$: Observable<Job[]>;

  constructor(private apiService: ApiService, private dialogService: DialogService) {
    this.jobs$ = this.apiService.getJobs();
  }

  openJobDetail = (jobName: string | undefined) => this.dialogService.open(JobComponent, {data: {jobName}})

  openCreateJobDialog = () => this.dialogService.open(JobComponent, {});

  runJob = (jobName: string) => this.apiService.runJob(jobName).subscribe();

  deleteJob = (jobName: string) => this.apiService.deleteJob(jobName).subscribe();

  getJobLog = (jobName: string) => this.apiService.getJobLog(jobName).pipe(
    tap(htmlContent => {
      const newWindow = window.open();
      if (newWindow) {
        newWindow.document.write(htmlContent);
        newWindow.document.close();
      } else {
        alert('Please allow pop-ups to view the HTML content.');
      }
    })
  ).subscribe();
}
