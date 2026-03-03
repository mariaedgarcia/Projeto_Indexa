import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioContato } from './componentes/paginas/formulario-contato/formulario-contato';
import { ListaContatos } from './componentes/paginas/lista-contatos/lista-contatos';
import { Login } from './componentes/paginas/login/login';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    FormularioContato,
    ListaContatos,
    Login
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}