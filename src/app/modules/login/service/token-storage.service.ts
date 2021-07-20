import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private _token:String= 'empty';
  private _usuario: Usuario = {
    idusuario: 0,
    nombres: 'Loading...',
    username: '',
    password: '',
    apellidos: '',
    idpersona:0
  };
  constructor() { }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  logout(): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
    //set userIsLogged = false;
  }
  public saveToken(token: string): void {
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getTokenData(token: string): any {
    if (token != null) {
      return JSON.parse(atob(token.split(".")[1]));
    }
    return null;
  }

  public saveUser(token: any): void {
    let data = this.getTokenData(token);
    this._usuario.idusuario = data.usuario.idusuario;
    this._usuario.nombres = data.usuario.nombres;
    this._usuario.username = data.usuario.username;
    this._usuario.apellidos = data.usuario.apellidos;
    this._usuario.idpersona=data.usuario.idpersona;
    sessionStorage.setItem(USER_KEY, JSON.stringify(this._usuario));


  }

  public get usuario(): Usuario {
    if (this._usuario.nombres != 'Loading...') {
      return this._usuario
    } else if (this._usuario.nombres == 'Loading...' && sessionStorage.getItem(USER_KEY) != null) {
      const userJson = sessionStorage.getItem(USER_KEY);
      this._usuario = userJson !== null ? JSON.parse(userJson) : new Usuario();
      return this._usuario;
    }
    return this._usuario
  }
  public get token(): String{
    if(this._token != 'empty'){
      return this._token;
    }else if(this._token == 'empty' && sessionStorage.getItem(TOKEN_KEY) != null){
      const t = sessionStorage.getItem(TOKEN_KEY);
      this._token = t !== null ? t: new String;
      return this._token;
    }
    return this._token;
  }

  public dataSession():boolean{
    if(sessionStorage.getItem(USER_KEY)!=null && sessionStorage.getItem(TOKEN_KEY)!=null){
      return true;
    }else{
      return false;
    }
  }
}
