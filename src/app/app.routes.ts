import { Routes } from '@angular/router';
import { RoutePaths } from './shared/utils/routes';

export const routes: Routes = [

    {path: RoutePaths.LOGIN, loadComponent: () => import('./home/login/login').then(m => m.Login) },
     {path: RoutePaths.HOME, 
     loadComponent: () => import('./home/dashboard/dashboard').then(m => m.Dashboard)
    ,
    children: [
      {
        path: RoutePaths.COURSES,
        loadComponent: () => import('./features/course/course').then(m => m.Courses)
      },
      {
        path: RoutePaths.STUDENTS,
        loadComponent: () => import('./features/students/students').then(m => m.Students),
        
      },
      {
        path: RoutePaths.USERS,
        loadComponent: () => import('./features/users/users').then(m => m.Users)
      },
      {
        path: '',
        redirectTo: RoutePaths.HOME, 
        pathMatch: 'full'
      }
    ] },

     {path: '', redirectTo: RoutePaths.LOGIN, pathMatch:'full'},
     {path: '**', redirectTo: RoutePaths.LOGIN, pathMatch:'full'}

];
