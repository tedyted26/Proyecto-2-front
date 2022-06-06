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
  constructor(private authService: AuthServiceService,private tokenStorage: TokenStorageService, private router:Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  submitForm(){
    
    if (this.form.invalid){
      console.log('Form invalido')
      return;
    }
    console.log("Formulario rellenado exitosamente.")
    this.authService
    .login(this.form.get('email')?.value, this.form.get('password')?.value)
    .subscribe((response) => {
      console.log(response)
      localStorage.setItem('user_auth', response.token);
      localStorage.setItem('name', 'Andres');
      localStorage.setItem('email', this.form.get('email')?.value);
      this.router.navigate(['/Admin']);
    })
    //lo que tiene que ver con el servicio de api

  

}}
