import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NetworkDeviceComponent } from './networkdevice.component';

@NgModule({
  declarations: [NetworkDeviceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'device', component: NetworkDeviceComponent },
    ]),
  ],
})
export class NetworkDeviceModule {}
