import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Conteiner } from '../../conteiner/conteiner';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContatoInterface } from '../../contato/contato-interface';
import { ContatoService } from '../../../services/contato-service';

@Component({
  selector: 'app-perfil-contato',
  imports: [Conteiner, RouterLink],
  templateUrl: './perfil-contato.html',
  styleUrl: './perfil-contato.css',
})
export class PerfilContato implements OnInit {
  contato: ContatoInterface = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: '',
    observacoes: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute, 
    private contatoService: ContatoService,
    private cdr: ChangeDetectorRef,
    private router: Router){
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (id){
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
        this.contato = contato;
        this.cdr.detectChanges();
      });
    }
  }

  excluir(){
    if (this.contato.id){
      this.contatoService.excluirContato(this.contato.id).subscribe(() => {
        this.router.navigateByUrl('/lista-contatos');
      });
    }
  }
  
}