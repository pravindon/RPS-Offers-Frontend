import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/core/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    this.getOrg();
    this.getUser();
  }

  getOrgList : any = [];
  getUserList : any = [];
  getOrg() {
    this.httpService.getOrganization().subscribe(data => {
      this.getOrgList = data;
      console.log('Organization list', data.length);
    })
  }

  getUser() {
    this.httpService.getUserProfile().subscribe(data => {
      this.getUserList = data;
      console.log('End User Profile list', data.length);
    })
  }

}
