import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector:'[appPasswordPattern]',
    providers:[{provide:NG_VALIDATORS, useExisting:passwordPatternDirective, multi:true}]
})
export class passwordPatternDirective {

}