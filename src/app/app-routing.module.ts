import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedroomComponent } from './bedroom/bedroom.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DecorComponent } from './decor/decor.component';
import { HomeComponent } from './home/home.component';
import { LivingComponent } from './living/living.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'living',component:LivingComponent},
    {path:'bedroom',component:BedroomComponent},
    {path:'decor',component:DecorComponent},
    {path:'',redirectTo:'/products/living',pathMatch:'full'} //to show living component when we click products tab
  ]},
  {path:'',component:HomeComponent},
  {path:'**',component:PagenotfoundComponent}//wild card route,it must be placed in the last of the routes array bec ** can match with any string
  //{path:'',redirectTo:'/login',pathMatch:'full'}//we are trying to redirect to login page because our home page is empty
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


//this file is used to configure the routing

export class AppRoutingModule {}
