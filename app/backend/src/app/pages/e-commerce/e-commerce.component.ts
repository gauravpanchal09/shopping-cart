import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../shared/auth.service";

@Component({
  selector: "ngx-ecommerce",
  templateUrl: "./e-commerce.component.html",
})
export class ECommerceComponent implements  OnInit {
  constructor(public authService: AuthService) {

  }
  ngOnInit() {
  }
}
