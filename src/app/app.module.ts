import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { StudentFormComponent } from './components/forms/student-form/student-form.component';
import { CourseFormComponent } from './components/forms/course-form/course-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { StudentCardComponent } from './components/cards/student-card/student-card.component';
import { CourseCardComponent } from './components/cards/course-card/course-card.component';
import { HttpClientModule } from '@angular/common/http';
import { EditCourseButtonComponent } from './components/modals/edit-course-button/edit-course-button.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditCourseFormComponent } from './components/forms/edit-course-form/edit-course-form.component';
import { EditStudentComponent } from './components/forms/edit-student/edit-student.component';
import { EditStudentButtonComponent } from './components/modals/edit-student-button/edit-student-button.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchBarComponent } from './components/search/search-bar/search-bar.component';
import { SearchCourseComponent } from './pages/search-course/search-course.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShowCoursesComponent } from './components/list/show-courses/show-courses.component';
import { ShowStudentsComponent } from './components/list/show-students/show-students.component';
import { SearchStudentComponent } from './pages/search-student/search-student.component';
import { ShowStudentsButtonComponent } from './components/modals/show-students-button/show-students-button.component';
import { StudentsSuscribedComponent } from './components/students-suscribed/students-suscribed.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StudentPageComponent,
    CoursePageComponent,
    SidenavbarComponent,
    StudentFormComponent,
    CourseFormComponent,
    StudentListComponent,
    CourseListComponent,
    WelcomeComponent,
    WelcomePageComponent,
    StudentCardComponent,
    CourseCardComponent,
    EditCourseButtonComponent,
    EditCourseFormComponent,
    EditStudentComponent,
    EditStudentButtonComponent,
    NotFoundComponent,
    SearchBarComponent,
    SearchCourseComponent,
    ShowCoursesComponent,
    ShowStudentsComponent,
    SearchStudentComponent,
    ShowStudentsButtonComponent,
    StudentsSuscribedComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
