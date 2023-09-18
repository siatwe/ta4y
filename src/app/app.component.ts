import {Component} from '@angular/core';
import {ApiService} from "./api/services/api-service";
import {Observable} from "rxjs";
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

  openJobDetail = (jobId: number | undefined) => this.dialogService.open(JobComponent, {data: {jobId}})

  protected readonly open = open;
}
