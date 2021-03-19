import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { StudentService } from '../shared/core/services/student.service';
import { ContainerComponent } from './container/container.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AddAdminComponent,
    ContainerComponent,
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
