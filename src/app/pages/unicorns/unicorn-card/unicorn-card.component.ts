import { Component, EventEmitter, Input, Output } from '@angular/core';
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
import { Observable, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { EditUnicornComponent } from '../dialogs/edit-unicorn/edit-unicorn.component';
import { UnicornsService } from '../../../shared/services/unicorns.service';

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
  @Output() delete = new EventEmitter<Unicorn>();

  isInCart$: Observable<boolean> = this.cartService.cart$.pipe(
    map(unicorns => unicorns.some(u => u.id === this.unicorn.id))
  );

  constructor(
    private cartService: CartService,
    private dialog: MatDialog,
    private unicornsService: UnicornsService
  ) {}

  public openEditDialog() {
    this.dialog
      .open(EditUnicornComponent, { data: this.unicorn })
      .afterClosed()
      .pipe(
        switchMap((updatedUnicorn: Unicorn) =>
          this.unicornsService.updateUnicorn(updatedUnicorn).pipe(map(() => updatedUnicorn))
        )
      )
      .subscribe(updatedUnicorn => {
        this.unicorn = updatedUnicorn;
      });
  }

  public toggleToCart(unicorn: Unicorn) {
    this.cartService.toggleToCart(unicorn);
  }

  public deleteUnicorn(unicorn: Unicorn) {
    this.delete.emit(unicorn);
  }
}
