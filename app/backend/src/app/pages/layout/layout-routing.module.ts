import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CategorymanagementComponent } from './categorymanagement/categorymanagement.component';
import { ProductComponent } from './product/product.component';
import { OrderlistingComponent } from './orderlisting/orderlisting.component';
import { CmsComponent } from './cms/cms.component';
import { BannermanagementComponent } from './bannermanagement/bannermanagement.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'userprofile',
      component: UserprofileComponent,
    },
    {
      path: 'categorymanagement',
      component: CategorymanagementComponent,
    },
    {
      path: 'product',
      component: ProductComponent,
    },
    {
      path: 'orderlisting',
      component: OrderlistingComponent,
    },
    {
      path: 'cms',
      component: CmsComponent,
    },
    {
      path: 'bannermanagement',
      component: BannermanagementComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
