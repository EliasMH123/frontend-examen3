import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';
import { TokenStorageService } from '../service/token-storage.service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private tokenService: TokenStorageService) { }
  form: any = {};
  ngOnInit(): void {
  }
  login(): void {
    if (this.form.username == null || this.form.password == null) {
      Swal.fire('Error Login', 'Username o password vacios', 'error')
    } else {
      console.log(this.form);
      this.authService.login(this.form).subscribe(
        data => {
          console.log(data, 'Te has logeado correctamente!');
          console.log(this.tokenService.getTokenData(data.accessToken));
          this.tokenService.saveToken(data.accessToken);
          this.tokenService.saveUser(data.accessToken); 
          setTimeout(this.navigatePages.bind(this),2000) 
        }
      )
    }
  }
  navigatePages(){
    this.router.navigate(['/home']);
  }
}
