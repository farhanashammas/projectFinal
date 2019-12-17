import { Component, OnInit,Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService, } from 'angular-webstorage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy { 

  constructor(private router:Router,@Inject(LOCAL_STORAGE) private storage:WebStorageService,) { }
  button='Profile'

  
  ngOnInit() {
    console.log(this.storage.get('uname')) 
  }
  
  newAd(){
    this.router.navigate(['add'])
  }
  login(){
    if(this.storage.get('uname')==null)
      this.button="Login";
      else if(this.storage.get('uname')=="admin@gmail.com")
      this.button="admin";
      else 
      this.button="Profile"
    this.router.navigate(['login']);
  }

  ngOnDestroy(){
    this.storage.remove('uname')
  }
}
