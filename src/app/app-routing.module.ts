import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './user/user.module#userModule'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    UserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
