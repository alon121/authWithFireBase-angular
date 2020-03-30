import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestAreaComponent } from './guest-area/guest-area.component';
import { LoginComponent } from './login/login.component';
import { UsersDataComponent } from './users-data/users-data.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component:GuestAreaComponent },
  {path: 'login', component:LoginComponent},
  {path: 'users', component:UsersDataComponent,canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
