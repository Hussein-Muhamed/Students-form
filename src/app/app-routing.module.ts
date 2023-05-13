import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { ErrorComponent } from './error/error.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

const routes: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserDetailsComponent},
  {path:'add',component:AddNewUserComponent},
  {path:'update/:id',component:UpdateUserComponent},
  {path:'delete/:id',component:DeleteUserComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
