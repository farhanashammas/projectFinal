import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import {IProduct} from './product.model'
import { LOCAL_STORAGE, WebStorageService, } from 'angular-webstorage-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
constructor(public productService:ProductService,public router:Router,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }
Status:String;
category:String='';
model:any={};
product:IProduct[];
id;
randomProduct;
admin:boolean=false;
items=['Home Appliances','Electronics','Furnitures','Free Stuff','Two wheeler for rent','Two wheeler for sale','Four wheeler for rent','Four wheeler for sale',
'Residential unit for rent','Residential units for sale','Commercial units for rent','Commercial units for sale'];
isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return true;
  }
  return false;
}
  ngOnInit() {
     if(this.storage.get('uname')=="admin@gmail.com")
      this.admin=true;
  
      this.products(this.category);
    }   
  
    
 products(category){
  if(!this.isEmpty(category)){
      this.productService.random()
      .subscribe((data) => {
       this.product = JSON.parse(JSON.stringify(data)).product ;
      // console.log( this.product);
    })  
    }
    else{
      console.log(this.category);
    this.productService.products(this.category)
    .subscribe((data) => {
       this.product = JSON.parse(JSON.stringify(data)).product ;
      // console.log( this.product);
    })
    } 
  } 

productDetail(id){
  if(this.storage.get('uname')==null)
    this.router.navigate(['login'])
   else {
      this.id=this.productService.setId(id)
      this.router.navigate(['addetails']) 
   }
} 

selectChangeHandlerItem(event: any) {
  this.category = event.target.value;
  console.log(this.category);
}
delete(id){
  // alert("delete!")
  this.productService.delete(id)
  .subscribe((result)=>{
    if(JSON.parse(JSON.stringify(result)).Status=="Success"){
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['allads'])}); 
    }
    else{
      alert("Error");
    }
  })
}

}
