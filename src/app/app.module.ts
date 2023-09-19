import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DialogModule} from "primeng/dialog";
import {DialogService} from "primeng/dynamicdialog";
import {JobModule} from "./features/job/job.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {HighlightJsModule} from "ngx-highlight-js";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DialogModule,
    JobModule,
    BrowserAnimationsModule,
    ButtonModule,
    HighlightJsModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [DialogService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
