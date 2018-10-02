import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { Routes, RouterModule } from '@angular/router';
import { NovaPaginaComponent } from './paginas/nova-pagina/nova-pagina.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';

const appRoutes: Routes = [
  {path: 'novaPagina', component: NovaPaginaComponent },
  {path: '', component: PaginaInicialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    PaginaInicialComponent,
    NovaPaginaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
