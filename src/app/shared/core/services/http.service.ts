import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, ApiUrl } from '../constant/index';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  getHeader() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Accept', 'application/json; charset=utf-8');
  }

  constructor(private http : HttpClient) { }

  getUserProfile(): Observable<any> {
    return this.http.get(ApiUrl.userUrl)
  }

  deleteUserProfile(id : any): Observable<any> {
    return this.http.delete(ApiUrl.userUrl)
  }

  getOrganization(): Observable<any> {
    return this.http.get(ApiUrl.orgUrl)
  }

  postOrganization(data : any) {
    return this.http.post(ApiUrl.orgUrl, data);
  }

  deleteOrganization(id : any) {
    return this.http.delete(ApiUrl.orgUrl+id)
  }

  getCurrentOrg(id : any) {
    return this.http.get(ApiUrl.orgUrl+id)
  }

  updateOrg(id : any, data : any) {
    return this.http.put(ApiUrl.orgUrl+id, data)
  }

}
