import { Component, OnInit,Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService, } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import {IProduct} from '../product.model'

@Component({
  selector: 'app-view-ads',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.css']
})
export class ViewAdsComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService, private router:Router,private productService:ProductService) { }
  user;
  product:IProduct[]
  admin:boolean=false;

  ngOnInit() {
    if(this.storage.get('uname')==null){
      this.router.navigate(['login'])
    }
    else if(this.storage.get('uname')=="admin@gmail.com")
      this.admin=true;
    this.user=this.storage.get('uname');
    // console.log(this.user)
    this.productService.getAds(this.user)
    .subscribe((data) => { 
      this.product = JSON.parse(JSON.stringify(data)).product ;
      console.log(JSON.parse(JSON.stringify(data)).product)
      // console.log( this.product);
    }) 

    }


    edit(product){
      this.router.navigate(['add',product])
    }
    delete(id){
      this.productService.delete(id)
      .subscribe((result)=>{
        if(JSON.parse(JSON.stringify(result)).Status=="Success"){
        
          this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.router.navigate(['ads'])});
        }
        else{
          alert("Error");
        }
      })
    }
}
