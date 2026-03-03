import { Component, OnInit } from '@angular/core';
import { Conteiner } from '../../conteiner/conteiner';
import { Separador } from '../../separador/separador';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContatoService } from '../../../services/contato-service';

@Component({
  selector: 'app-formulario-contato',
  standalone:true,
  imports: [
    Conteiner, 
    Separador, 
    ReactiveFormsModule, 
    CommonModule, 
    RouterModule],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato implements OnInit {
  contatoForm!: FormGroup;

  constructor(
    private contatoService: ContatoService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute){
  }

  ngOnInit(){
    this.inicializarFormulario();
    this.carregarContato();
  }

  inicializarFormulario(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  salvarContato(){
    const novoContato = this.contatoForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    novoContato.id = id ? parseInt(id) : null

    this.contatoService.editarOuSalvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos');
    });
  }

  cancelar(){
    this.contatoForm.reset();
  }

  carregarContato(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
        this.contatoForm.patchValue(contato);
      });
    }
  }

}