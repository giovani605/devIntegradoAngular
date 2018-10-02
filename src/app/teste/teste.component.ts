import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
  providers: [LoggingService]
})
export class TesteComponent implements OnInit {
  dados:any = "Nenhuma";

  constructor(private servicoLogging: LoggingService) { }

  ngOnInit() {
  }
  onInput() {
    this.servicoLogging.logToConsole("Estou funcionando");
    console.log(this.dados);
  }

}
