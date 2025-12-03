import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../appservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={};
public token: string;
  constructor(  private router:Router,public _appservice: AppService) { }
  ngOnInit() {
  }
  onSubmit(){
    this._appservice.login(this.user)
    .subscribe((response:any)=>{
      var token = response.token;
                if (token) {
                    this.token = token;
                    localStorage.setItem("token", token);
                    this.router.navigate(['/kot']);
                }
    });
  }
}
