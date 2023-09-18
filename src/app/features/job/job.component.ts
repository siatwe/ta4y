import {Component} from '@angular/core';
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {ApiService} from "../../api/services/api-service";
import {Observable, tap} from "rxjs";
import {Job} from "../../api/models/Job";

@Component({
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {

  data: any;
  job$: Observable<Job>

  constructor(private apiService: ApiService, private readonly dialogConfig: DynamicDialogConfig) {
    this.data = this.dialogConfig.data;
    this.job$ = this.apiService.getJob(this.data.jobId);
  }
}
