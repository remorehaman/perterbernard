import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Users {

    first_name : string;
    last_name : string;
    email : string;
    phone: string;
    message : string;
    formGroup : FormGroup;
    status:string;
    submitted = false;

    constructor(){

       this.first_name = "";
       this.last_name = "";
       this.email = "";
        this.phone = "" ;
        this.message = "";
       this.status = "";
       var fb = new FormBuilder();
       this.formGroup = fb.group({
           'first_nameControl': ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]*$')]],
           'last_nameControl': ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]*$')]],
           'emailControl': ['',[Validators.required,Validators.email]],
           'phoneControl':  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
           'messageControl': ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]*$')]],
          });


    }

}


