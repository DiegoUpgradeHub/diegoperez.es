import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: ``, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `home`, redirectTo: ``, pathMatch: `full`
  },
  {
    path: `sign-in`, loadChildren: () =>
      import('./features/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: `user-area/:id`, loadChildren: () =>
      import('./pages/user-area/user-area.module').then(m => m.UserAreaModule),
      canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
  {
    path: `sign-up`, loadChildren: () =>
      import('./features/signup/signup.module').then(m => m.SignupModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
