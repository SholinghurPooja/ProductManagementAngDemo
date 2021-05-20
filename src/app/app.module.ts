import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LivingComponent } from './living/living.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { DecorComponent } from './decor/decor.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';
import { ColorsComponent } from './colors/colors.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
     ProductDetailsComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    LivingComponent,
    BedroomComponent,
    DecorComponent,
    PagenotfoundComponent,
    TestComponent,
    ColorsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
