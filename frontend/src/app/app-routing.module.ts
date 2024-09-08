import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './componentes/Vprincipal/view.component';
import { FormProdutoComponent } from './componentes/Vprincipal/formularios/add-formulario/form-produto.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ViewComponent },
  { path: 'form-produto', component: FormProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
