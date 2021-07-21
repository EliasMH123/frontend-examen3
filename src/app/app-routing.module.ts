import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './modules/login/login-component/login-component.component';
import { AddCorreoComponent } from './modules/correo/add-correo/add-correo.component';
import { ListArchivoComponent } from './modules/archivo/list-archivo/list-archivo.component';
import { HomeComponentComponent } from './modules/home/home-component/home-component.component';
import { LayoutComponentComponent } from './layout/layout-component/layout-component.component';
import { LoginGuard } from './modules/login/service/guards/login.guard';
import { AuthGuard } from './modules/login/service/guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    component: LoginComponentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pages',
    component: LayoutComponentComponent,
    canActivateChild:[LoginGuard],
    children:[
      {
        path:'home',
        component: HomeComponentComponent
      },
      {
        path:'correos',
        component: AddCorreoComponent
      },
      {
        path: 'archivos',
        component: ListArchivoComponent
      }
    ]
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
