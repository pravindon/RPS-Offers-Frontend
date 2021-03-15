import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  { path: 'addashboard', component: DashboardComponent },
  { path: 'adAddAdmin', component: AddAdminComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'organizationList', component: OrganizationListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
