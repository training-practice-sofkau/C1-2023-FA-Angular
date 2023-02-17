import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/forms/course-form/course-form.component';
import { StudentFormComponent } from './components/forms/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchCourseComponent } from './pages/search-course/search-course.component';
import { SearchStudentComponent } from './pages/search-student/search-student.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: WelcomePageComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
    ]
  },
  {
    path: 'students',
    component: StudentPageComponent,
    children: [
      {
        path: '',
        component: StudentListComponent,
      },
      {
        path: 'new',
        component: StudentFormComponent,
      },

      {
        path: 'search',
        component: SearchStudentComponent,
      },
    ],
  },
  {
    path: 'courses',
    component: CoursePageComponent,
    children: [
      {
        path: '',
        component: CourseListComponent,
      },
      {
        path: 'new',
        component: CourseFormComponent,
      },
      {
        path: 'search',
        component: SearchCourseComponent,
      },
    ],
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
