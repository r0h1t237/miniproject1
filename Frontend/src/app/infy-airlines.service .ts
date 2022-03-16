import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class InfyAirlinesService{
    constructor(private http: HttpClient) { }

    getairlines(): Observable<any> {
        return  this.http.get<any>('http://localhost:3000/airlines/');
       }

       bookTicket(bookingObj: any): Observable<any> {  
                        
            return  this.http.post<any>('http://localhost:3000/bookings/',bookingObj);
      }   

}