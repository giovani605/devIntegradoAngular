import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from "rxjs";
import { Cartao } from 'src/app/model/cartao.model';
@Component({
  selector: 'app-cartao-lista',
  templateUrl: './cartao-lista.component.html',
  styleUrls: ['./cartao-lista.component.css']
})
export class CartaoListaComponent implements OnInit, OnDestroy {
  private listaCartoes:Cartao[] = [];
  private subCartoes: Subscription;
  constructor(private userService: UserService) {

  }
  ngOnDestroy() {
    this.subCartoes.unsubscribe();
  }
  // converte oq vem do back end para uma classe
  converterCartao(cartao: any) {
    return new Cartao(cartao["saldo"], cartao["Descricao"], cartao["idCartao"], cartao["Conta_pertence"]);
  }

  ngOnInit() {
    this.subCartoes = this.userService.getCartoesUpdatedListener().subscribe((cartoes) => {
      this.listaCartoes = [];
      for (var a of cartoes) {
        this.listaCartoes.push(this.converterCartao(a));
      }
    });
  }

}
