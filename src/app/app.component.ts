import { Component } from '@angular/core';
import {NgForm }     from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

defautSub = 'advanced';

 onSubmit (form: NgForm){
   console.log(form);

   console.log("Password is: " + form.value.Password)
   console.log("e-mail is: " + form.value.email)
   console.log("Subscription is: " + form.value.subs)

 }


}
