import { Injectable } from '@angular/core';
import { ContatoInterface } from '../componentes/contato/contato-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {

  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient){
  }

  obterContatos(): Observable<ContatoInterface[]>{
    return this.http.get<ContatoInterface[]>(this.API);
  }

  salvarContatos(contato: ContatoInterface): Observable<ContatoInterface>{
    return this.http.post<ContatoInterface>(this.API, contato);
  }

  buscarPorId(id: number): Observable<ContatoInterface>{
    const url = `${this.API}/${id}`
    return this.http.get<ContatoInterface>(url)
  }
  
  excluirContato(id: number): Observable<ContatoInterface>{
    const url = `${this.API}/${id}`
    return this.http.delete<ContatoInterface>(url)
  }

  editarContato(contato: ContatoInterface): Observable<ContatoInterface>{
    const url = `${this.API}/${contato.id}`
    return this.http.put<ContatoInterface>(url, contato);
  }

  editarOuSalvarContato(contato: ContatoInterface): Observable<ContatoInterface>{
    if (contato.id){
      return this.editarContato(contato);
    } else {
      return this.salvarContatos(contato);
    }
  }

}