import { Component, OnInit,Inject } from '@angular/core';
import { ProductService } from '../product.service';
import { LOCAL_STORAGE, WebStorageService, } from 'angular-webstorage-service';
import {Signup} from '../signup/signup.model'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // user=new Signup(null,null,null,null,null)
  user:Signup[];
  uname:String='';
  admin:boolean=false;
  id;
  dp:String="assets/img/user.jpg"
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return true;
    }
    return false;
  }
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,private route:ActivatedRoute,private productService:ProductService,private router:Router) { }

  ngOnInit() {
    // this.storage.remove('uname')  
    if(this.storage.get('uname')==null){
      this.router.navigate(['login'])
    }
    else if(this.storage.get('uname')=="admin@gmail.com") 
      this.admin=true;

      this.uname=this.storage.get('uname');
      console.log(this.uname)
        this.productService.getUser(this.uname)
        .subscribe((data) => { 
          this.user = JSON.parse(JSON.stringify(data)).user ;
          console.log(JSON.parse(JSON.stringify(data)).user)
          console.log( this.user);
        })
    }

      
     
  

  logout(){
    this.storage.remove('uname')
    // console.log(this.storage.get('uname'))
    this.router.navigate([''])
  }
  viewAds(){
    this.router.navigate(['ads'])
  }
}
