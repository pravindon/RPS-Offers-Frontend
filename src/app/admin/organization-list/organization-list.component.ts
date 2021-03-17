import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/core/services/student.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {

  constructor( private studentService : StudentService) { }

  ngOnInit(): void {
    this.getOrg()
  }

  getOrgList : any = [];
  getOrg() {
    this.studentService.getOrganization().subscribe(data => {
      this.getOrgList = data;
      console.log('Organization list', data);
    })
  }

  deleteOrg(id : any) {
    this.studentService.deleteOrganization(id).subscribe(data => {
      this.getOrg();
    })
    console.log(id);

  }

}
