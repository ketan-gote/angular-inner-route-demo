import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'customer',
  templateUrl: 'customer.component.html',
})
export class CustomerComponent implements OnInit{

    constructor(private route: Router){

    }

    ngOnInit(): void {
        this.route.navigate(['/cust/network/device'])
    }
}
