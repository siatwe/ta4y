import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DialogModule} from "primeng/dialog";
import {DialogService} from "primeng/dynamicdialog";
import {JobModule} from "./features/job/job.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DialogModule,
    JobModule,
    BrowserAnimationsModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
