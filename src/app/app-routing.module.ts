import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/forms/course-form/course-form.component';
import { StudentFormComponent } from './components/forms/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'

  },
  {
    path: 'home',
    component: WelcomePageComponent,
    
  },
  {
    path: 'students',
    component: StudentPageComponent
  },
  {
    path: 'courses',
    component: CoursePageComponent
  },
  {
    path: 'students',
    
    children: [
      {
        path: 'new',
        component: StudentFormComponent
      },
      {
        path: 'search',
        component: StudentListComponent
      },
      {
        path: 'edit',
        component: StudentFormComponent
      }  
    ]
  },
  {
    path: 'courses',
   
    children: [
      {
        path: 'new',
        component: CourseFormComponent
      },
      {
        path: 'search',
        component: CourseListComponent
      },
      {
        path: 'edit',
        component: CourseFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
