import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn:'root'
})

export class customValidationService{

    patternValidator():ValidatorFn{
return (control:AbstractControl) => {
    if(!control.value){
        return null;
    }
    const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
    const valid = regex.test(control.value);
    return valid? null : {invalidPassword: true};
};
    }
}