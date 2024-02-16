import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerComponent,
        children: [{ path: 'network', loadChildren: () => import("../newtworkdevice/networkdevice.module").then(m => m.NetworkDeviceModule) }]
      }
    ]),
  ],
})
export class CustomerModule { }
