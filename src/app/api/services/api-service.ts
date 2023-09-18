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
  getJob = (jobId: number) => this.httpClient.get(this.baseUrl + '/jobs?job_id=' + jobId).pipe(
    map(job => job as Job)
  );


}
