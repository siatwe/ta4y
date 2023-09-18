import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs";
import {Job} from "../models/Job";

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000'

  constructor(private httpClient: HttpClient) {
  }

  getJobs = () => this.httpClient.get(this.baseUrl + '/jobs').pipe(
    map(jobs => jobs as Job[])
  );
  getJob = (jobName: string) => this.httpClient.get(this.baseUrl + '/jobs?job_name=' + jobName).pipe(
    map(job => job as Job)
  );

  updateJob = (job: Job) => this.httpClient.post(this.baseUrl + '/job?job_name=' + job.job_name, {
    job_name: job.job_name,
    test_case: job.test_case
  })

}
