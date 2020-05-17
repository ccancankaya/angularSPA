import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import "@angular/compiler"
import { NgxGalleryModule } from 'ngx-gallery-9';
import {NgxPaginationModule} from 'ngx-pagination';
import { JwtModule } from "@auth0/angular-jwt";
import {CookieService} from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { FoodComponent } from './food/food.component';
import { FoodFilterPipe } from './foods/food-filter.pipe';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { RegisterComponent } from './register/register.component';
import { KitchensComponent } from './kitchens/kitchens.component';
import { FoodsComponent } from './foods/foods.component';
import { ProfileComponent } from './profile/profile.component';
import { KitchenPofileComponent } from './kitchen-pofile/kitchen-pofile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { OrderComponent } from './order/order.component';
import { KitchenFoodComponent } from './kitchen-food/kitchen-food.component';



export function tokenGetter() {
  return localStorage.getItem("token");
}


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    FoodComponent,
    FoodFilterPipe,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    KitchenComponent,
    RegisterComponent,
    KitchensComponent,
    FoodsComponent,
    ProfileComponent,
    KitchenPofileComponent,
    SidebarComponent,
    MainProfileComponent,
    OrderComponent,
    KitchenFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:44357"],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
