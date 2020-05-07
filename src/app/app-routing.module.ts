import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { FoodAddOneComponent } from './food/food-add-one/food-add-one.component';
import { FoodAddTwoComponent } from './food/food-add-two/food-add-two.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ContactComponent } from './contact/contact.component';
import { FoodsComponent } from './foods/foods.component';
import { RegisterComponent } from './register/register.component';
import { KitchensComponent } from './kitchens/kitchens.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'foods',component:FoodsComponent},
  {path:'food-add-1',component:FoodAddOneComponent,canActivate:[LoginGuard]},
  {path:'food-add-2',component:FoodAddTwoComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'foods/category/:categoryId',component:FoodsComponent},
  {path:'about',component:AboutComponent},
  {path:'kitchens',component:KitchensComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'food/:id',component:FoodComponent},
  {path:'kitchen',component:KitchenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
