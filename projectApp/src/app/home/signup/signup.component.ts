import {Inject, Component, OnInit } from '@angular/core';
import {Signup} from './signup.model'
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import {HttpClient} from '@angular/common/http' 
import { LOCAL_STORAGE,WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-template-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
admin:boolean=false;
  constructor(private router:Router,@Inject(LOCAL_STORAGE) private storage:WebStorageService, private productService:ProductService,private http:HttpClient) { }

  ngOnInit() {
    
  }
  model = new Signup(null,null,null,null,null,null,null)
  Status:String;
  data;
    
  onSubmit(){ 
    // console.log(this.model)
    this.productService.signup(this.model)
    .subscribe((result) => {
      this.Status = JSON.parse(JSON.stringify(result)).Status;
      if (this.Status == "Success") {
        alert("success")
        this.router.navigate(['']);
      }
      else {
        alert(this.Status);
      } 
    });
  }


  
}



  

