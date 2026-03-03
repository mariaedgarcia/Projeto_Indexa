import { Component } from '@angular/core';
import { Conteiner } from '../../conteiner/conteiner';
import { Separador } from '../../separador/separador';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Conteiner,
            Separador,
            ReactiveFormsModule,
            CommonModule, 
            RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  entrar(){
    if (this.loginForm.valid){
      console.log(this.loginForm.value)
    }
  }
}
