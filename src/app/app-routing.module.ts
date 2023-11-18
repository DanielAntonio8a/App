import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'primera-ventana',
    loadChildren: () => import('./primera-ventana/primera-ventana.module').then( m => m.PrimeraVentanaPageModule)
  },
  {
    path: 'segunda-ventana',
    loadChildren: () => import('./segunda-ventana/segunda-ventana.module').then( m => m.SegundaVentanaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
