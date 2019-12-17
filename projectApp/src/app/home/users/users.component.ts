import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import {Signup} from '../signup/signup.model'
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  admin:boolean=false;
  user:Signup[];
  email:String="";
  id;
  constructor(public productService:ProductService,public router:Router,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }

  ngOnInit() {
    if(this.storage.get('uname')==null){
      this.router.navigate(['login'])
    }
    else if(this.storage.get('uname')=="admin@gmail.com")
      this.admin=true;
  
      this.users();
  }

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return true;
    }
    return false;
  }
    
  users(){
    this.productService.users()
    .subscribe((data) => {
     this.user = JSON.parse(JSON.stringify(data)).user ;
    // console.log( this.product);
  }) 
}
userDetails(email){
  this.productService.setUser(email)
     this.router.navigate(['profile'])
}
    // if(!this.isEmpty(id)){
    //     this.productService.users()
    //     .subscribe((data) => {
    //      this.user = JSON.parse(JSON.stringify(data)).user ;
    //     // console.log( this.product);
    //   })  
    //   }
    //   else{
    //     console.log(this.id);
    //   this.productService.user(this.id)
    //   .subscribe((data) => {
    //      this.user = JSON.parse(JSON.stringify(data)).user ;
    //     // console.log( this.product);
    //   })
    //   } 
    // } 
    delete(user){
      // alert("delete!")
      this.productService.deleteUser(user)
      .subscribe((result)=>{
        if(JSON.parse(JSON.stringify(result)).Status=="Success"){
          this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.router.navigate(['users'])}); 
        }
        else{
          alert("Error");
        }
      })
    }   
}

