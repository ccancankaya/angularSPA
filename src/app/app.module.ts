import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxGalleryModule} from 'ngx-gallery';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { FoodComponent } from './food/food.component';
import { FoodFilterPipe } from './foods/food-filter.pipe';
import { FoodAddOneComponent } from './food/food-add-one/food-add-one.component';
import { FoodAddTwoComponent } from './food/food-add-two/food-add-two.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { RegisterComponent } from './register/register.component';
import { KitchensComponent } from './kitchens/kitchens.component';
import { FoodsComponent } from './foods/foods.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    FoodComponent,
    FoodFilterPipe,
    FoodAddOneComponent,
    FoodAddTwoComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    KitchenComponent,
    RegisterComponent,
    KitchensComponent,
    FoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxGalleryModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
