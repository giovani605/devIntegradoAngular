import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-cartao-lista',
  templateUrl: './cartao-lista.component.html',
  styleUrls: ['./cartao-lista.component.css']
})
export class CartaoListaComponent implements OnInit,OnDestroy {
  private listaCartoes = [];
  private subCartoes: Subscription;
  constructor(private userService: UserService) {

  }
  ngOnDestroy(){
    this.subCartoes.unsubscribe();
  }

  ngOnInit() {
    this.subCartoes = this.userService.getCartoesUpdatedListener().subscribe((cartoes) => {
      this.listaCartoes = cartoes;
      console.log("Cheguei" + this.listaCartoes);
    });
    console.log("Vive" + this.listaCartoes);
  }

}
