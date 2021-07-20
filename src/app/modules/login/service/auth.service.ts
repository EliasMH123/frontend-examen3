import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serviceEndPoint } from '../../../routes/endpoint'
import { TokenStorageService } from './token-storage.service';

const AUTH_API = serviceEndPoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(AUTH_API+'/', {
      username: credentials.username,
      password: credentials.password
    },httpOptions)
  }

  

  isAuthenticated(token:any): boolean {
    let data = this.tokenService.getTokenData(token);
    if (data != null) {
      return true;
    } else {
      return false;
    }
  }
}
