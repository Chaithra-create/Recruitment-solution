import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

export class AppService{
    constructor(private http:HttpClient){}
    rootUrl = '/api';

    getUsers(){
        return this.http.get(this.rootUrl + '/users')
    }

    addUser(user:any){
        return this.http.post(this.rootUrl + '/user',user);
    }
}