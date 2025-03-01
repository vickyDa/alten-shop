import { Injectable } from '@angular/core';
import { Product } from 'app/products/data-access/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productsInCart = new BehaviorSubject<Product[]>([]);
  cart$ = this.productsInCart.asObservable();

  addToCart(product: Product) {
    const currentCart = this.productsInCart.value;
    this.productsInCart.next([...currentCart, product]);
  }

  removeFromCart(productId: number) {
    const currentCart = this.productsInCart.value;
    const updatedCart= currentCart.filter(product => product.id !== productId);
    this.productsInCart.next(updatedCart);
}

  clearCart() {
    this.productsInCart.next([]);
  }
}
