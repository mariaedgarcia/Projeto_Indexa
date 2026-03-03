import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Conteiner } from '../../conteiner/conteiner';
import { Cabecalho } from '../../cabecalho/cabecalho';
import { Separador } from '../../separador/separador';
import { Contato } from '../../contato/contato';
import { FormsModule } from '@angular/forms';
import { FormularioContato } from '../formulario-contato/formulario-contato';

import { RouterLink } from '@angular/router';
import { Login } from '../login/login';
import { Perfil } from '../perfil/perfil';
import { ContatoService } from '../../../services/contato-service';
import { ContatoInterface } from '../../contato/contato-interface';

@Component({
  selector: 'app-lista-contatos',
  imports: [
    CommonModule,
    Conteiner,
    Cabecalho,
    Separador,
    Contato,
    FormsModule,
    FormularioContato,
    RouterLink,
    Login,
    Perfil],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.css',
})

export class ListaContatos implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';

  contatos: ContatoInterface[] = [];

  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService, private cdr: ChangeDetectorRef){ 
  }

  ngOnInit(){
    this.contatoService.obterContatos().subscribe(ListaContatos => {
      this.contatos = ListaContatos;
      this.cdr.detectChanges();
    })
  }

  private removerAcentos(texto: string): string{
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorLetraInicial(letra:string): ContatoInterface[]{
    return this.filtrarContatosPorTexto().filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(letra);
    })
  }

  filtrarContatosPorTexto(): ContatoInterface[]{
    if (!this.filtroPorTexto){
      return this.contatos
    }

    return this.contatos.filter( contato => {
      return this.removerAcentos(contato.nome)
      .toLowerCase().includes(this.removerAcentos(this.filtroPorTexto.toLowerCase()));
    })
  }

}
