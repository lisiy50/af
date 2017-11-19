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
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCaseComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    DataService,
    CoursersService,
    AuthorsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
