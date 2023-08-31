import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";

@Injectable({
    providedIn:"root"
})
export class UserService{
constructor(private http: HttpClient){}

   registerUser(user:User){
    const headers = { 'content-type': 'application/json'}  
return this.http.post('/api/user',user,{'headers':headers});

    }

    getUser(){
        return this.http.get('/api/users');
    }
}