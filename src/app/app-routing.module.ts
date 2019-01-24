import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: 'orders', component: OrderListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/orders' },
  { path: 'orders/new', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
