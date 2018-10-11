import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class UserService{
    public usuario:any;
    public token:any;
    public cartoes:any[];
    
    constructor(private http: HttpClient){

    }
    recuperarCartoes(){
        this.http.get("http://localhost:3001/cartoes/user/" + this.usuario["idConta"]).subscribe(response => {
            console.log(response);
            this.cartoes = response["dados"];
        });
    }

}