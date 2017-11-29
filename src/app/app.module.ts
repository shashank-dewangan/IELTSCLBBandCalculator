import { ClbService } from './clb.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ClbComponent } from './clb/clb.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';


@NgModule({
  declarations: [
    AppComponent,
    ClbComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ClbService,CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
