import { Component, OnInit ,Inject} from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import {IProduct} from '../product.model'
import { LOCAL_STORAGE, WebStorageService, } from 'angular-webstorage-service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private productService:ProductService,@Inject(LOCAL_STORAGE) private storage:WebStorageService, private router:Router,public route:ActivatedRoute) { }

  items=['Home Appliances','Electronics','Furnitures','Free Stuff','Two wheeler for rent','Two wheeler for sale','Four wheeler for rent','Four wheeler for sale',
          'Residential unit for rent','Residential units for sale','Commercial units for rent','Commercial units for sale']
  
  category:String='';
  age:String='';
  usage:String='';
  condition:String='';  
  location:String;  
  email:String='';
  admin:boolean=false;

  productItem=new IProduct(null,null,null,null,null,null,null,null,null,null,null);
  ageOptions=['Brand new','0-1 Month','1-6 Months','6-12 Months','1-2 Years','2-5 Years'];
  usageOptions=['In its original packing','Only used once','Used a few times','Heavy usage'];
  conditionOptions=['Perfect inside out','Excellent','Average'];
  locationOptions=['Kannur','Calicut','Kochi','Thiruvananthapuram'];
  update=false;
  updateId;
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return true;
    }
    return false;
}
  
  ngOnInit() {
    if(this.storage.get('uname')==null){
      this.router.navigate(['login'])
    }
    else if(this.storage.get('uname')=="admin@gmail.com")
    {  
      this.admin=true;
    //   this.router.navigate(['admin-add'])
    }

    if(this.isEmpty(this.route.snapshot.params)){
      this.productItem=JSON.parse(JSON.stringify(this.route.snapshot.params))
      console.log(this.productItem)
      this.update=true;
      this.updateId=this.route.snapshot.params._id;
    }
    console.log(this.route.snapshot.params)
    this.email=this.storage.get('uname');    
  }

  AddProduct(product)
  {
    if(product.email==this.storage.get('uname')){
      if(this.update==false){
        this.productService.newProduct(product)
      .subscribe((result)=>{
        if(JSON.parse(JSON.stringify(result)).Status=="Success"){
        
          this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.router.navigate(['ads'])});
        }
        else{
          alert("Error");
        }
        
      })
      }else{
        this.productService.updateProduct(product)
        .subscribe((result) => {
          if (JSON.parse(JSON.stringify(result)).Status == "Success") {
            this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
              this.router.navigate(['ads'])
            });
          }
          else {
            alert("Failed");
          }
        }) 
      this.update=false;
      }
    }else
      alert("Please enter correct user id")
    
  } 

selectChangeHandlerItem(event: any) {
  this.category = event.target.value;
}
selectChangeHandlerAge (event: any) {
  this.age = event.target.value;
}
selectChangeHandlerUsage (event: any) {
  this.usage = event.target.value;
}
selectChangeHandlerCondition (event: any) {
  this.condition = event.target.value;
}
selectChangeHandlerLocation (event: any) {
  this.location = event.target.value;
}
back(){
  this.router.navigate([''])
}
}