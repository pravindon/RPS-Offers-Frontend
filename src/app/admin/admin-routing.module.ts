import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminComponent } from './admin.component';
import { ContainerComponent } from './container/container.component';
import { DashboardComponent } from '../super-admin/dashboard/dashboard.component';
const routes: Routes = [
  { path: 'admin', component:AdminComponent },
  { path: 'addashboard', component: DashboardComponent },
  { path: 'adAddAdmin', component: AddAdminComponent },
  { path: 'container', component: ContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
