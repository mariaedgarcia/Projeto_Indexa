import { Component } from '@angular/core';
import { Separador } from '../../separador/separador';
import { Conteiner } from '../../conteiner/conteiner';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [Conteiner,
            Separador, 
            CommonModule, 
            RouterModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {

  constructor(private router: Router) {}
 
  contato = {
    nome: 'Manu Cit',
    foto: '/assets/manuCit.jpg',
    numero: '+55 47 92569-15478',
    email: 'manucit@gmail.com.br',
    nascimento: '25/12/2003',
    linkedin: 'linkedin.com/manucit',
    instagram: 'instagram.com/manucit'
  };
 
  voltar(){
    this.router.navigate(['/lista-contatos']);
  }
}