import { LoginService } from './service/login.service';
import { FirstComponent } from './first/first.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name:string;
  password:string;
  
  
  constructor(private mylogin:LoginService){
 var first= this.mylogin.login("admin","admin");
 var second= this.mylogin.login("admnin","admin");
 console.log(first,second);
 
  }
  show(){
    console.log(this.name);
   }
   login(){
   var result=this.mylogin.login(this.name,this.password);
   console.log(result);
   }
   
}
