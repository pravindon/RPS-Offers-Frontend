import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  private url :  string = "http://localhost:4000/v1/students";
  getStudent(): Observable<any> {
    return this.http.get(this.url);
  }

  private urll :  string = "http://localhost:4000/v1/organization";
  getOrganization(): Observable<any> {
    return this.http.get(this.urll);
  }

  private urlll :  string = "http://localhost:4000/v1/organization/";
  deleteOrganization(id : any) {
    return this.http.delete(this.urlll+id);
  }

}
