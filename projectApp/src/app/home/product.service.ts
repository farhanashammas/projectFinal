import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }

  setId(id){
    this.storage.set('id',id);
  }
  getId(){
    return this.storage.get('id');
  }
  login(user){
    return this.http.post("http://localhost:3000/login",user)
  }
  signup(user){
    return this.http.post("http://localhost:3000/signup",user)
  }
  users(){
    return this.http.get("http://localhost:3000/signup/users")
  }
  // user(id){
  //   return this.http.post("http://localhost:3000/signup/userDetails",{id:id})
  // }
  deleteUser(email){
    return this.http.post("http://localhost:3000/signup/delete",{email:email})
  }
  products(category){ 
    return this.http.post("http://localhost:3000/products",{category:category})
  }
  newProduct(product){
    return this.http.post("http://localhost:3000/products/insert",product)  
  }
  updateProduct(product){
    return this.http.post("http://localhost:3000/products/update",product) 
  }
  delete(id){
    return this.http.post("http://localhost:3000/products/delete",{id:id}) 
  }
  setUser(email){
    this.storage.set('email',email);
  }
  getUser(user){
    return this.http.post("http://localhost:3000/signup/profile",{email:user})
  }
  getAds(user){
    return this.http.post("http://localhost:3000/products/ads",{email:user})
  }
  product(id){
    return this.http.post("http://localhost:3000/products/product",{id:id}) 
  }
  random(){
    return this.http.get("http://localhost:3000/products/random") 
  }
} 


  