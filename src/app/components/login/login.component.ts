import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private _authService: AuthService){}

  ngOnInit(): void {
    this.createLoginForm();
  }


  createLoginForm(){
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    })
  }

  ulogujSe(){
    if(!this.loginForm.valid){
      return;
    }

    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;

    this._authService.login(username, password);

    return false;
  }
}