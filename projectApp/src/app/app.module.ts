import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';  
import { SignupComponent } from './home/signup/signup.component';
import { LoginComponent } from './home/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './home/add/add.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ProfileComponent } from './home/profile/profile.component';
import { ViewAdsComponent } from './home/view-ads/view-ads.component';
import { AdDetailsComponent } from './home/ad-details/ad-details.component';
import { AllAdsComponent } from './home/all-ads/all-ads.component';
import { UsersComponent } from './home/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    AddComponent,
    ProfileComponent,
    ViewAdsComponent,
    AdDetailsComponent,
    AllAdsComponent,
    UsersComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StorageServiceModule, 
    HttpClientModule ,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
