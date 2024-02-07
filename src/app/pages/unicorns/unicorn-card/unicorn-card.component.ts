import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { first, Observable, map, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditUnicornComponent } from '../dialogs/edit-unicorn/edit-unicorn.component';
import { UnicornsService } from '../../../shared/services/unicorns.service';
import { CartDispatchers } from '../../../store/dispatchers/cart.dispatchers';
import { CartSelectors } from '../../../store/selectors/cart.selectors';

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
export class UnicornCardComponent implements OnInit {
  @Input({ required: true }) unicorn!: Unicorn;
  @Output() delete = new EventEmitter<Unicorn>();

  isInCart$!: Observable<boolean>;

  constructor(
    private dialog: MatDialog,
    private unicornsService: UnicornsService,
    private cartDispatchers: CartDispatchers,
    private cartSelectors: CartSelectors
  ) {}

  ngOnInit(): void {
    this.isInCart$ = this.cartSelectors.unicornIsInCart$(this.unicorn.id);
  }

  public openEditDialog() {
    this.dialog
      .open(EditUnicornComponent, { data: this.unicorn })
      .afterClosed()
      .pipe(
        switchMap((updatedUnicorn: Unicorn) =>
          this.unicornsService.update(updatedUnicorn).pipe(map(() => updatedUnicorn))
        )
      )
      .subscribe(updatedUnicorn => {
        this.unicorn = updatedUnicorn;
      });
  }

  public toggleToCart(unicorn: Unicorn) {
    this.isInCart$.pipe(first()).subscribe(isInCart => {
      if (isInCart) {
        this.cartDispatchers.removeUnicornFromCart(unicorn);
      } else {
        this.cartDispatchers.addUnicornToCart(unicorn);
      }
    });
  }

  public deleteUnicorn(unicorn: Unicorn) {
    this.delete.emit(unicorn);
  }
}
