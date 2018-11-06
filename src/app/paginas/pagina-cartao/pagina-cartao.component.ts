import { Component, OnInit, Input } from '@angular/core';
import { Cartao } from 'src/app/model/cartao.model';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-pagina-cartao',
  templateUrl: './pagina-cartao.component.html',
  styleUrls: ['./pagina-cartao.component.css']
})
export class PaginaCartaoComponent implements OnInit {

  @Input() cartao: Cartao;

  public dataInicial:Date = new Date();
  public dataFim:Date = new Date();
  public promessa:Subject<any>;
  public valorPrevistoInicio:any = "";
  public valorPrevistoFim:any = "";

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onAtualizarSaldo() {
    console.log("cartao id " + this.cartao.id);
    this.userService.atualizarSaldoCartao(this.cartao.id);
  }
  onCalcularPeriodo(){
    console.log("data:" + this.dataFim);
    console.log("data Inicial:" + this.dataInicial);
    this.promessa = this.userService.calcularSaldoPeriodo(this.cartao.id,this.dataFim,this.dataInicial);
    this.promessa.asObservable().subscribe((resultado) =>{
      console.log("cheguei no componente" + JSON.stringify(resultado));
      this.valorPrevistoInicio = resultado["saldoInicio"];
      this.valorPrevistoFim = resultado["saldoFim"];
      this.promessa.unsubscribe();
    });
  }
}
