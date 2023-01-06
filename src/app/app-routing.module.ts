import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivateAuthenticated } from './shared/guards/auth.guard';
import { CanActivateLogin } from './shared/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [CanActivateAuthenticated],
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    canActivate: [CanActivateLogin],
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
