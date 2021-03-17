import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationComponent } from './organization/organization.component';
import { StudentService } from '../shared/core/services/student.service';
import { ContainerComponent } from './container/container.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddAdminComponent,
    OrganizationComponent,
    OrganizationListComponent,
    ContainerComponent,
    EditOrganizationComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    StudentService
  ]
})
export class AdminModule { }
