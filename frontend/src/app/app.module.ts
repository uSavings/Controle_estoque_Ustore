import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ViewComponent } from './componentes/Vprincipal/view.component';
import { AddProdutosComponent } from './componentes/Vprincipal/add-produtos/add-produtos.component';
import { ListaProdutosComponent } from './componentes/Vprincipal/lista-produtos/lista-produtos.component';
import { AtualizaProdutosComponent } from './componentes/Vprincipal/atualiza-produtos/atualiza-produtos.component';
import { DeletaProdutosComponent } from './componentes/Vprincipal/deleta-produtos/deleta-produtos.component';
import { FormProdutoComponent } from './componentes/Vprincipal/formularios/add-formulario/form-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ViewComponent,
    AddProdutosComponent,
    ListaProdutosComponent,
    AtualizaProdutosComponent,
    DeletaProdutosComponent,
    FormProdutoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
