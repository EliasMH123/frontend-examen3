import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './modules/login/login-component/login-component.component';
import { AddCorreoComponent } from './modules/correo/add-correo/add-correo.component';
import { ListArchivoComponent } from './modules/archivo/list-archivo/list-archivo.component';
import { HomeComponentComponent } from './modules/home/home-component/home-component.component';


export const routes: Routes = [
  {
    path: 'login',
      component: LoginComponentComponent
  },
  {
    path: 'correos',
      component: AddCorreoComponent
  },
  {
    path: 'archivos',
      component: ListArchivoComponent
  },
  {
    path: 'home',
      component: HomeComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
