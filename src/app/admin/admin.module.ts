import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationComponent } from './organization/organization.component';
import { StudentService } from '../services/student.service';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddAdminComponent,
    OrganizationComponent,
    OrganizationListComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService
  ]
})
export class AdminModule { }
