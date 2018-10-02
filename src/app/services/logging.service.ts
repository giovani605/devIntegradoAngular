import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class LoggingService {
    private cont: number = 0;
    constructor(private http: HttpClient) {

    }

    logToConsole(msg: string):any {
        this.cont++;
        console.log(msg + " " + this.cont);
        this.http.get("http://localhost:3000/teste").subscribe((dados) => {
            console.log(dados);
            return dados;
        });

    }
}