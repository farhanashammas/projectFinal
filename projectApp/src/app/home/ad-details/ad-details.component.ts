import { Component, OnInit } from '@angular/core';
import {IProduct } from '../product.model'
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit {

items=['Home Appliances','Electronics','Furnitures','Free Stuff','Two wheeler for rent','Two wheeler for sale','Four wheeler for rent','Four wheeler for sale',
  'Residential unit for rent','Residential units for sale','Commercial units for rent','Commercial units for sale']
product:IProduct[];
id;

constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.productService.getId()
    console.log(this.id)
    this.productService.product(this.id)
      .subscribe((data) => {
         this.product = JSON.parse(JSON.stringify(data)).product ;
        console.log( this.product);
      })
    } 
    
}


