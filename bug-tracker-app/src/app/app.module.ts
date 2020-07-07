import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from "./bugTracker/bugTracker.component";
import { BugStatsComponent } from "./bugTracker/views/bugStats.component";

import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { ElapsedPipe } from "./bugTracker/pipes/elapsed.pipe";
import { SortPipe } from "./bugTracker/pipes/sort.pipe";

import { ClosedCountPipe } from "./bugTracker/pipes/closedCount.pipe";
import { BugOperationsService } from "./bugTracker/services/bugOperations.service";
import { BugStorageService } from "./bugTracker/services/bugStorage.service";
@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , ClosedCountPipe
    , TrimTextPipe
    , ElapsedPipe
    , SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugOperationsService
    , BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
