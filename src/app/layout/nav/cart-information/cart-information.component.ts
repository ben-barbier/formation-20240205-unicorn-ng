import { Component } from '@angular/core';
import { CartService } from '../../../shared/features/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-information',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './cart-information.component.html',
  styleUrl: './cart-information.component.scss',
})
export class CartInformationComponent {
  cartSize$: Observable<number> = this.cartService.cart$.pipe(map(unicorns => unicorns.length));

  constructor(private cartService: CartService) {}
}
