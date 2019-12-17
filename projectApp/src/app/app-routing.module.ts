import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { AddComponent } from './home/add/add.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ViewAdsComponent } from './home/view-ads/view-ads.component';
import { AdDetailsComponent } from './home/ad-details/ad-details.component';
import { AllAdsComponent } from './home/all-ads/all-ads.component';
import { UsersComponent } from './home/users/users.component';




const routes: Routes = [
  {path:'',component:HomeComponent,children:[]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'add',component:AddComponent},
  {path:'profile',component:ProfileComponent},
  {path:'ads',component:ViewAdsComponent} ,
  {path:'addetails',component:AdDetailsComponent},
  {path:'allads',component:AllAdsComponent},
  {path:'users',component:UsersComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
