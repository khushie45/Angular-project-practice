import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserResolver } from './user.resolver';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'crud',
    loadComponent: () =>
      import('./crud/crud.component').then((c) => c.CrudComponent),
  },

  // Lazy Loading
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/main-page/main-page.component').then(
        (c) => c.MainPageComponent
      ),
    // here when we use children then in main parent component we have to add <router-outlet />
    // other way is to lazy load the children loadComponent: () => import ()
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
    canActivate: [AuthGuard], // Protect dashboard
  },

  // Dynamic Route with Resolver
  {
    path: 'user/:id',
    component: UserDetailsComponent,
    resolve: { user: UserResolver },
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'formBuilder',
        component: FormBuilderComponent,
      },
    ],
  },
  {
    path: 'todos',
    loadComponent: () =>
      import('./todos/todos.component').then((c) => c.TodosComponent),
  },
  { path: 'form', component: FormComponent },
  { path: 'template-form', component: TemplateDrivenFormComponent },
  // Wildcard route for 404
  { path: '**', component: PageNotFoundComponent },
];
