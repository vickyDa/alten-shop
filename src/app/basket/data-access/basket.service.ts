import { Injectable } from '@angular/core';
import { Product } from 'app/products/data-access/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private productsInBasket = new BehaviorSubject<Product[]>([]);
  basket$ = this.productsInBasket.asObservable();

  addToBasket(product: Product) {
    const currentBasket = this.productsInBasket.value;
    this.productsInBasket.next([...currentBasket, product]);
  }

  removeFromBasket(productId: number) {
    const currentBasket = this.productsInBasket.value;
    const updatedBasket = currentBasket.filter(product => product.id !== productId);
    this.productsInBasket.next(updatedBasket);
}

  clearBasket() {
    this.productsInBasket.next([]);
  }
}
