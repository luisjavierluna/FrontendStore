import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UsComponent } from './us/us.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'us', component: UsComponent},
  {path: 'product', component: ProductComponent},
  {path: '**', redirectTo: ''},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
