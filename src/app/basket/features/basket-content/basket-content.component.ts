import { Component, OnInit } from '@angular/core';
import { Product } from 'app/products/data-access/product.model';
import { BasketService } from 'app/basket/data-access/basket.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-basket',
  standalone: true,
  template:  `
  <h2>Votre Panier</h2>
  <div *ngIf="basket.length > 0; else emptyBasket">
    <div *ngFor="let product of basket">
      <p>{{ product.name }} - {{ product.price }}</p>
      <p-button label="Retirer" severity="danger" (onClick)="removeFromBasket(product.id)" />
    </div>
    <p>Total : {{ computeTotal()}}</p>
  </div>
  <ng-template #emptyBasket>
    <p>Votre panier est vide.</p>
  </ng-template>
`,
imports: [CommonModule, ButtonModule],
})
export class BasketContentComponent implements OnInit {
  basket: Product[] = [];

  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.basketService.basket$.subscribe((products) => {
      this.basket = products;
    });
  }

  computeTotal() {
    return this.basket.reduce((total, product) => total + product.price, 0);
  }

  removeFromBasket(productId: number) {
    this.basketService.removeFromBasket(productId);
  }

  clearBasket() {
        this.basketService.clearBasket();
    }
}
