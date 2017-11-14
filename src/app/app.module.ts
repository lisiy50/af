import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import {CoursersService} from './coursers.service';
import { AuthorsComponent } from './authors/authors.component';
import {AuthorsService} from './authors.service';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DataService,
    CoursersService,
    AuthorsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
