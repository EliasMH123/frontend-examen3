import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
  }
  form: any = {};
  login(): void {
    if (this.form.username == null || this.form.password == null) {
      Swal.fire('Error Login', 'Username o password vacios', 'error')
    } else {
      this.authService.login(this.form).subscribe(
        data => {
          console.log(data, 'Te has logeado correctamente!');
          console.log(this.authService.getTokenData(data.accessToken));
          this.authService.saveToken(data.accessToken);
          this.authService.saveUser(data.accessToken); 
          setTimeout(this.navigatePages.bind(this),1500) 
        }
      )
    }
  }
  navigatePages(){
    this.router.navigate(['/pages/home']);
  }
}
