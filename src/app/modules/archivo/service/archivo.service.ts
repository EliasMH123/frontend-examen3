import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { serviceEndPoint } from 'src/app/routes/endpoint';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {
  private httpHeaders=new HttpHeaders({ 'Content-Type': 'application/json'});
  private finalroute='archivos';
  constructor(private http:HttpClient,private router:Router) { }

  getArchivos():Observable<any>{
    return this.http.get<any>(`${serviceEndPoint}/${this.finalroute}`,{headers:this.httpHeaders});
  }
  deleteArchivo(id:any):Observable<any>{
    return this.http.delete(`${serviceEndPoint}/${this.finalroute}/`+id,{headers:this.httpHeaders});
  }
  addArchivos(archivo:any):Observable<number>{
    return this.http.post<number>(`${serviceEndPoint}/${this.finalroute}`,archivo,{headers:this.httpHeaders})
  }
}
