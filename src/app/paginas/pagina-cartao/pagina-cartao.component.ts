import { Component, OnInit, Input } from '@angular/core';
import { Cartao } from 'src/app/model/cartao.model';

@Component({
  selector: 'app-pagina-cartao',
  templateUrl: './pagina-cartao.component.html',
  styleUrls: ['./pagina-cartao.component.css']
})
export class PaginaCartaoComponent implements OnInit {

  @Input() cartao:Cartao;

  constructor() { }

  ngOnInit() {
  }

}
