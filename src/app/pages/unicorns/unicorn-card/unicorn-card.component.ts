import { Component, Input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../../shared/features/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-unicorn-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardAvatar,
    MatCardContent,
    AsyncPipe,
    RouterLink,
    MatMiniFabButton,
    MatCardActions,
    MatCardImage,
    MatIcon,
  ],
  templateUrl: './unicorn-card.component.html',
  styleUrl: './unicorn-card.component.scss',
})
export class UnicornCardComponent {
  @Input({ required: true }) unicorn!: Unicorn;

  isInCart$: Observable<boolean> = this.cartService.cart$.pipe(
    map(unicorns => unicorns.some(u => u.id === this.unicorn.id))
  );

  constructor(private cartService: CartService) {}

  public openEditDialog() {
    alert('Edit unicorn');
  }

  public toggleToCart(unicorn: Unicorn) {
    this.cartService.toggleToCart(unicorn);
  }

  public deleteUnicorn(unicorn: Unicorn) {
    alert('Delete: ' + unicorn.name);
  }
}
