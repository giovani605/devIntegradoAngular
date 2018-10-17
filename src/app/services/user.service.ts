import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";


@Injectable({ providedIn: "root" })
export class UserService {
    public usuario: any;
    public token: any;
    private cartoes: any[];
    private cartoesUpdated = new Subject<any[]>();

    constructor(private http: HttpClient) {
    }

    recuperarCartoes() {
        this.http.get("http://localhost:3001/cartoes/user/" + this.usuario["idConta"]).subscribe(response => {
            console.log(response);
            this.cartoes = response["dados"];
            this.cartoesUpdated.next([...this.cartoes]);
        });
    }
    getCartoesUpdatedListener() {
        return this.cartoesUpdated.asObservable();
    }

    getCartoes() {
        // copiando o array [...array]
        return [...this.cartoes];
    }
    atualizarSaldoCartao(idCartao: any) {
        console.log("Atualizando saldo cartao" + idCartao);
        this.http.post("http://localhost:3001/cartoes/atualizar/" + idCartao,{}).subscribe(response => {
            console.log(response);
            this.recuperarCartoes();

        });

    }

}