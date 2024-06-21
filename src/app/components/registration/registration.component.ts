import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private _authService: AuthService){}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  //kreiranje forme pomocu FormBuilder
  createRegisterForm(){
    this.registerForm = this.fb.group({
     
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  //funkcija za registraciju poziva funkciju servisa authService i prosledjuje joj argumente
  registrujSe(){
  
    const email = this.registerForm.controls['email'].value;
    const username = this.registerForm.controls['username'].value;
    const password = this.registerForm.controls['password'].value;

    this._authService.register( email, username, password);
  }
}