import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationComponent } from './organization/organization.component';
import { SuperAdminComponent } from './super-admin.component';

const routes: Routes = [
  { path: '', component: SuperAdminComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'editOrganization/:id', component: EditOrganizationComponent },
  { path: 'organizationList', component: OrganizationListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
