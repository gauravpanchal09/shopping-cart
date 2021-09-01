import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { BannermanagementComponent } from './bannermanagement/bannermanagement.component';
import { ProductComponent } from './product/product.component';
import { CategorymanagementComponent } from './categorymanagement/categorymanagement.component';
import { CmsComponent } from './cms/cms.component';
import { NewsService } from './news.service';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    LayoutComponent,
    UserprofileComponent,
    BannermanagementComponent,
    ProductComponent,
    CategorymanagementComponent,
    CmsComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class LayoutModule { }
