import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private http:HttpClient, private studentService : StudentService) { }

  ngOnInit(): void {
    this.getStudnetList();
  }


  onSubmit(data: any) {
    this.http.post('http://localhost:4000/v1/students', data).subscribe((result) => {
      console.log(result);

    })
  }

  getList: any = [];
  getStudnetList() {
    this.studentService.getStudent().subscribe(data => {
      this.getList = data;
      console.log('Inner Data', data);
    })
  }

}
