import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProdutosComponent } from './componentes/Vprincipal/add-produtos/add-produtos.component';

const routes: Routes = [
  { path: 'adicionar-produto', component: AddProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
