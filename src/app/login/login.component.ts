import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form = new FormGroup({
  email: new FormControl(null, Validators.required),
  password: new FormControl(null, Validators.required),
  });

  textoError="";
  
  constructor(private authService: AuthServiceService,private tokenStorage: TokenStorageService, private router:Router) { }
  ngOnInit(): void {
    
  }
  

  submitForm(){
    
    if (this.form.invalid){
      this.textoError="Comprueba los campos.";
    }
    this.authService
    .login(this.form.get('email')?.value, this.form.get('password')?.value)
    .subscribe((response) => {
      console.log(response)
      localStorage.setItem('user_auth', response.access_token);
      localStorage.setItem('name', 'Andres');
      localStorage.setItem('email', this.form.get('email')?.value);
      this.router.navigate(['/Admin']);
    })
    //lo que tiene que ver con el servicio de api

  

}}
