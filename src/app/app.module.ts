import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { Routes, RouterModule } from '@angular/router';
import { NovaPaginaComponent } from './paginas/nova-pagina/nova-pagina.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './auth/login/login.component';
import { PaginaLoginComponent } from './paginas/pagina-login/pagina-login.component';
import { FormsModule }   from '@angular/forms';
import { CartaoListaComponent } from './cartoes/cartao-lista/cartao-lista.component';
const appRoutes: Routes = [
  {path: 'novaPagina', component: NovaPaginaComponent },
  {path: 'home', component: PaginaInicialComponent },
  {path: '', component: PaginaLoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    PaginaInicialComponent,
    NovaPaginaComponent,
    LoginComponent,
    PaginaLoginComponent,
    CartaoListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
