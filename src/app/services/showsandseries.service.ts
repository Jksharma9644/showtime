import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowsandseriesService {

  constructor(private http: HttpClient) {
    let headers = new HttpHeaders();
  }

  getShowsList() {
    return this.http.get("http://api.tvmaze.com/schedule");
  }
  getShowDetails(id){
    return this.http.get("http://api.tvmaze.com/shows/"+id);
 
  }
}
