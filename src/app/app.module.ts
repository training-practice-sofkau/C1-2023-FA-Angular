import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
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
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
