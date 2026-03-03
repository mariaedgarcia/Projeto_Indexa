import { Component } from '@angular/core';
import { Conteiner } from '../../conteiner/conteiner';
import { Separador } from '../../separador/separador';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-login2',
  imports: [Conteiner, Separador, CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login2.html',
  styleUrl: './login2.css',
})
export class Login2 {
loginForm!: FormGroup;
showPassword = false;
 
constructor(){
  this.loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    senha: new FormControl("", [Validators.required, Validators.minLength(6)]),
    remember: new FormControl(true)
  });
}
 
login(){
  if (this.loginForm.invalid){
    this.loginForm.markAllAsTouched();
    return;
  }
 
  console.log(this.loginForm.value);
  const {email, senha, remember} = this.loginForm.value;
 
  if (remember){
    localStorage.setItem('rememberEmail', email);
  }else {
    localStorage.removeItem('rememberEmail');
  }
}
 
ngOnInit(){
  const remembered = localStorage.getItem("rememberEmail");
  if (remembered){
    this.loginForm.patchValue({
      email: remembered, remember:true
    })
  }
}
}