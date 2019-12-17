import { Component, OnInit ,Inject} from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService, } from 'angular-webstorage-service';
import { Key } from 'protractor';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
  model:any={};
  Status:String;
  key;
  admin:boolean=false;
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService, public productService:ProductService,public router:Router) { }

  ngOnInit() {
     if(this.storage.get('uname')=="admin@gmail.com")
    {  
      this.admin=true;
      this.router.navigate(['profile'])
    }else if(this.storage.get('uname'))
      this.router.navigate(['profile'])
  }

  onSubmit(){
       this.productService.login(this.model)
    .subscribe((result) => {
      this.Status = JSON.parse(JSON.stringify(result)).Status;
      if (this.Status == "Success") {
        this.storage.set('uname',this.model.email);
        this.router.navigate(['']);
      }
      else {
        alert(this.Status);
      } 
    });
      
  }
}
