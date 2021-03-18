import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { StudentService } from 'src/app/shared/core/services/student.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  organizationForm = new FormGroup({
    cardNo : new FormControl(),
    orgnaziationName: new FormControl(),
    adminName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    mobileNo: new FormControl(),
    mobileNoAlternate: new FormControl(),
    dateOfBirth: new FormControl(),
    localAddress: new FormControl(),
    permanentAddress: new FormControl(),
    city: new FormControl(),
    district: new FormControl(),
    state: new FormControl(),
    country: new FormControl(),
    pinCode: new FormControl(),
    firmType: new FormControl(),
    description: new FormControl(),
    gender: new FormControl(),
    firmLogo: new FormControl()
  })
  alertSuccess = false;
  constructor(private http:HttpClient, private studentService : StudentService) { }

  ngOnInit(): void {
    this.organizationData();
  }

  organizationData(){
    this.studentService.postOrganization(this.organizationForm.value).subscribe((result) => {
      console.log('Organization Data got it', result);
      this.organizationForm.reset();
      this.alertSuccess = true;
    })
  }

  closeAlert(){
    this.alertSuccess = false;
  }

}
