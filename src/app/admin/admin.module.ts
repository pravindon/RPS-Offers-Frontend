import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationComponent } from './organization/organization.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddAdminComponent,
    OrganizationComponent,
    OrganizationListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

  ]
})
export class AdminModule { }
