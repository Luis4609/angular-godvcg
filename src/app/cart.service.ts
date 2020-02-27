import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
    addToCart(product) {
    this.items.push(product);   //Anade productos al array items
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];  //Devuelve el valor de items a vacio, para vaciar el cart
    return this.items;
  }
   getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  constructor(
       private http: HttpClient
  ) {}

}
