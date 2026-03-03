import { Routes } from '@angular/router';
import { FormularioContato } from './componentes/paginas/formulario-contato/formulario-contato';
import { ListaContatos } from './componentes/paginas/lista-contatos/lista-contatos';
import { Login } from './componentes/paginas/login/login';
import { Perfil } from './componentes/paginas/perfil/perfil';
import { Login2 } from './componentes/paginas/login2/login2';
import { PerfilContato } from './componentes/paginas/perfil-contato/perfil-contato';

export const routes: Routes = [
    {
        path: 'formulario',
        component: FormularioContato
    },    
    {
        path: 'formulario/:id',
        component: FormularioContato
    },
    {
        path:'lista-contatos',
        component: ListaContatos
    },
    {
        path: '',
        redirectTo: '/lista-contatos',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'perfil',
        component: Perfil
    },
    {
        path: 'login2',
        component: Login2
    },
    {
        path: 'perfil-contato',
        component: PerfilContato
    },
    {
        path: 'perfil-contato/:id',
        component: PerfilContato
    }
];