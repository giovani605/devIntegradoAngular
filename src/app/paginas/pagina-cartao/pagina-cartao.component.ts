import { Component, OnInit, Input } from '@angular/core';
import { Cartao } from 'src/app/model/cartao.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-pagina-cartao',
  templateUrl: './pagina-cartao.component.html',
  styleUrls: ['./pagina-cartao.component.css']
})
export class PaginaCartaoComponent implements OnInit {

  @Input() cartao: Cartao;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onAtualizarSaldo() {
    console.log("cartao id " + this.cartao.id);
    this.userService.atualizarSaldoCartao(this.cartao.id);
  }
}
