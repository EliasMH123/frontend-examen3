import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { serviceEndPoint } from 'src/app/routes/endpoint';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  private httpHeaders=new HttpHeaders({ 'Content-Type': 'application/json'});
  private finalroute='correos';
  constructor(private http:HttpClient,private router:Router) { }
  
}
