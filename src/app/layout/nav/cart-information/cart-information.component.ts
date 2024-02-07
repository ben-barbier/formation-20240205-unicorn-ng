import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CartSelectors } from '../../../store/selectors/cart.selectors';

@Component({
  selector: 'app-cart-information',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './cart-information.component.html',
  styleUrl: './cart-information.component.scss',
})
export class CartInformationComponent {
  cartSize$: Observable<number> = this.cartSelectors.cartUnicorn$.pipe(map(unicorns => unicorns.length));

  constructor(private cartSelectors: CartSelectors) {}
}
