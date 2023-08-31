import { Injectable } from "@angular/core";
import { Subject,Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class AlertService{
private keepAfterRouteChange = false;
private subject = new Subject<any>();

getAlert(): Observable<any>{
return this.subject.asObservable();
}

  success(message:string, keepAfterRouteChange = false){
this.keepAfterRouteChange = keepAfterRouteChange;
this.subject.next({type:'success',text:message});
  }  
}