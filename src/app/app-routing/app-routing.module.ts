import { CreateEmployeeComponent } from './../create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { CommonModule, } from '@angular/common';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeeComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
