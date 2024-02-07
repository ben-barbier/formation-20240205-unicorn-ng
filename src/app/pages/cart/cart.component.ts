import { Component } from '@angular/core';
import { CartDispatchers } from '../../store/dispatchers/cart.dispatchers';
import { CartSelectors } from '../../store/selectors/cart.selectors';
import { AsyncPipe } from '@angular/common';
import { MatList, MatListItem } from '@angular/material/list';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Unicorn } from '../../shared/models/unicorn.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe, MatList, MatListItem, MatButton, MatIcon, MatIconButton],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export default class CartComponent {
  cart$ = this.cartSelectors.cartUnicorn$;

  constructor(
    private cartDispatchers: CartDispatchers,
    private cartSelectors: CartSelectors
  ) {}

  removeUnicornFromCart(unicorn: Unicorn) {
    this.cartDispatchers.removeUnicornFromCart(unicorn);
  }
}
