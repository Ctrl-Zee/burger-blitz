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
  {
    path: 'menu-item/:id',
    loadChildren: () =>
      import('./menu-item/menu-item.module').then((m) => m.MenuItemPageModule),
  },  {
    path: 'bag',
    loadChildren: () => import('./bag/bag.module').then( m => m.BagPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
