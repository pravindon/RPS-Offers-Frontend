import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.organizationData();
  }

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


  url = "http://localhost:4000/v1";
  organizationData(){
    this.http.post(this.url + `/organization`, this.organizationForm.value).subscribe((result) => {
      console.log(result);
      this.organizationForm.reset();
    })
    console.warn(this.organizationForm.value);

  }

}
