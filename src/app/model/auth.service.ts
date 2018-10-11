import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from "./authData.model";
import { Router } from "@angular/router";
@Injectable({ providedIn: "root" })
export class AuthService {

    constructor(private http: HttpClient,private router: Router){

    }

    login(data: AuthData){
        this.http.post("http://localhost:3001/auth/login", data).subscribe(response => {
            console.log(response);
            if(response["loginFlag"])
                this.router.navigate(["/home"]);
        });
    }
}