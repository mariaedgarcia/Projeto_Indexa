import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato',
  imports: [RouterLink],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})

export class Contato {
  
  @Input() id!: number;
  @Input() nome: string = "";
  @Input() email: string = "";
  @Input() telefone: string = "";

}
