import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$ = new BehaviorSubject<Unicorn[]>([]);

  #addToCart(unicorn: Unicorn): void {
    this.cart$.next([...this.cart$.getValue(), unicorn]);
  }

  #removeFromCart(unicorn: Unicorn): void {
    this.cart$.next(this.cart$.getValue().filter(u => u.id !== unicorn.id));
  }

  toggleToCart(unicorn: Unicorn): void {
    if (this.cart$.getValue().some(u => u.id === unicorn.id)) {
      this.#removeFromCart(unicorn);
    } else {
      this.#addToCart(unicorn);
    }
  }
}
