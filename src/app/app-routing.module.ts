import { NgModule } 						from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersGridComponent }   from './users-grid/users-grid.component';
import { UserDetailComponent }   from './user-detail/user-detail.component';

const routes: Routes = [
	{ path: '', component: UsersGridComponent },
	{ path: 'detail/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
