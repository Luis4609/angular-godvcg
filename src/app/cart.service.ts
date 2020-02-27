import { Injectable } from '@angular/core';

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
  constructor() {}

}
