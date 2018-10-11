import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from "./authData.model";
@Injectable({ providedIn: "root" })
export class AuthService {

    constructor(private http: HttpClient){

    }

    login(data: AuthData){
        this.http.post("http://localhost:3001/auth", data).subscribe(response => {
            console.log(response);
        });
    }
}