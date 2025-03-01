import { Component, OnInit } from '@angular/core';
import { Product } from 'app/products/data-access/product.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CartService } from 'app/basket/data-access/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  template:  `
  <h2>Votre Panier</h2>
  <div *ngIf="cart.length > 0; else emptyCart">
    <div *ngFor="let product of cart">
      <p>{{ product.name }} - {{ product.price }}</p>
      <p-button label="Retirer" severity="danger" (onClick)="removeFromCart(product.id)" />
    </div>
    <p>Total : {{ computeTotal()}}</p>
  </div>
  <ng-template #emptyCart>
    <p>Votre panier est vide.</p>
  </ng-template>
`,
imports: [CommonModule, ButtonModule],
})
export class BasketContentComponent implements OnInit {
  basket: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((products) => {
      this.basket = products;
    });
  }

  computeTotal() {
    return this.basket.reduce((total, product) => total + product.price, 0);
  }

  removeFromBasket(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearBasket() {
        this.cartService.clearCart();
    }
}
