import { Routes } from '@angular/router';
import { HomeComponent }from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderComponent } from './pages/order/order.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { LoginComponent } from './core/pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:"home",component: HomeComponent},
    {path:"products",component: ProductsComponent},
    {path:"cart",component: CartComponent},
    {path:"brands",component: BrandComponent},
    {path:"products",component: ProductsComponent},
    {path:"categories",component: CategoriesComponent},
    {path:"checkout",component: CheckoutComponent},
    {path:"order",component: OrderComponent},
    {path:"register",component: RegisterComponent},
    {path:"login",component: LoginComponent},
    {path:"**",component: NotFoundComponent}



];
