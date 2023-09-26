import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
const routes: Routes = [
  {path:'departments', component:DeptListComponent},
  {path:'emplist',component:EmpListComponent},
  {path:'departments/:id',component:DeptDetailComponent},
  {path:'tabpage',component:TabContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[DeptListComponent,EmpListComponent,DeptDetailComponent]

