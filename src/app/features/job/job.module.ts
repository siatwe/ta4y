import {NgModule} from '@angular/core';
import {JobComponent} from "./job.component";
import {AsyncPipe} from "@angular/common";

@NgModule({
  declarations: [
    JobComponent
  ],
  imports: [
    AsyncPipe
  ],
  providers: [],
  bootstrap: []
})
export class JobModule { }
