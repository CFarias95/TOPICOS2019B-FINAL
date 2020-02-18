import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { Data } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {
  
  // apiKey = '?api_key=AbfR5Fnrvv1wBqVUQNWByBVgrfOVN54QHsGJiQcq';

  constructor(public http: HttpClient) { }

  loadInfo(){
    var apiUrl = "https://api.nasa.gov/planetary/apod?api_key=AbfR5Fnrvv1wBqVUQNWByBVgrfOVN54QHsGJiQcq";
    return new Promise(resolve => {
      this.http.get(apiUrl).subscribe(data => {
        resolve(data);
      }, error => {console.log(error);
      })
    });
  }
  loadfotos(){
    var apiUrl ="https://api.nasa.gov/planetary/apod?start_date=2020-01-01&end_date=2020-02-01&api_key=AbfR5Fnrvv1wBqVUQNWByBVgrfOVN54QHsGJiQcq";
    return new Promise(resolve => {
      this.http.get(apiUrl).subscribe(data => {
        resolve(data);
      }, error => {console.log(error);
      })
    });
  }

  loadfotodfecha(fechaini,fechafin){
    var apiUrl ="https://api.nasa.gov/planetary/apod?start_date="+fechaini+"&end_date="+fechafin+"&api_key=AbfR5Fnrvv1wBqVUQNWByBVgrfOVN54QHsGJiQcq";
    return new Promise(resolve => {
      this.http.get(apiUrl).subscribe(data => {
        resolve(data);
      }, error => {console.log(error);
      })
    });

  }


}
