import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ContactComponent } from './contact/contact.component';
import { FoodsComponent } from './foods/foods.component';
import { RegisterComponent } from './register/register.component';
import { KitchensComponent } from './kitchens/kitchens.component';
import { ProfileComponent } from './profile/profile.component';
import { KitchenPofileComponent } from './kitchen-pofile/kitchen-pofile.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { KitchenFoodComponent } from './kitchen-food/kitchen-food.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'foods', component: FoodsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'foods/category/:categoryId', component: FoodsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'kitchens', component: KitchensComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'food/:id', component: FoodComponent },
  { path: 'kitchen', component: KitchenComponent },
  {
    path: 'profile', component: ProfileComponent, children: [
      { path: 'main-profile', component: MainProfileComponent },
      { path: 'kitchen-profile', component: KitchenPofileComponent },
      { path: 'kitchen-food', component: KitchenFoodComponent },
      { path: 'order', component: OrderComponent }
    ]
  },
  { path: 'profile/main-profile', component: MainProfileComponent },
  { path: 'profile/kitchen-profile', component: KitchenPofileComponent },
  { path: 'profile/kitchen-food', component: KitchenFoodComponent },
  { path: 'profile/order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
