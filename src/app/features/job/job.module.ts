import {NgModule} from '@angular/core';
import {JobComponent} from "./job.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from 'primeng/button';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    JobComponent
  ],
  imports: [
    AsyncPipe,
    DialogModule,
    ButtonModule,
    NgIf,
    FormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class JobModule { }
