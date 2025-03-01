import {
  Component,
  OnInit,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { BasketContentComponent } from "./basket/features/basket-content/basket-content.component";
import { DialogModule } from "primeng/dialog";
import { BasketService } from "./basket/data-access/basket.service";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent, DialogModule, BasketContentComponent, ButtonModule, CommonModule
  ],
})
export class AppComponent implements OnInit{
 
  title = "ALTEN SHOP";
  basketItemCount = 0;

  public isDialogBasketVisible = false;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basketService.basket$.subscribe(products => {
      this.basketItemCount = products.length;
    });
  }

  showBasket() {
    this.isDialogBasketVisible = true;
  }

  closeBasket() {
    this.isDialogBasketVisible = false;
  }
}

