import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { StudentService } from '../shared/core/services/student.service';


@NgModule({
  declarations: [
    SuperAdminComponent,
    OrganizationComponent,
    OrganizationListComponent,
    EditOrganizationComponent,
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService
  ]
})
export class SuperAdminModule { }
