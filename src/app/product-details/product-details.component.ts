import { Component, OnInit, Output } from "@angular/core";
import { Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: { name: string; price: number; description: string; };

  constructor(private route: ActivatedRoute,
              private cartService : CartService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.product = products[+param.get('productId')];
    })
  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
