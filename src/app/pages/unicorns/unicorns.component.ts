import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UnicornCardComponent } from './unicorn-card/unicorn-card.component';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsSelectors } from '../../store/selectors/unicorns.selectors';
import { UnicornsDispatchers } from '../../store/dispatchers/unicorns.dispatchers';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-unicorns',
  standalone: true,
  imports: [RouterLink, UnicornCardComponent, AsyncPipe],
  templateUrl: './unicorns.component.html',
  styleUrl: './unicorns.component.scss',
})
export default class UnicornsComponent implements OnInit {
  public unicorns$ = this.unicornsSelectors.unicorns$;

  constructor(
    private unicornsSelectors: UnicornsSelectors,
    private unicornsDispatchers: UnicornsDispatchers
  ) {}

  ngOnInit(): void {
    this.unicornsDispatchers.getUnicorns();
  }

  public removeUnicorn(unicorn: Unicorn) {
    this.unicornsDispatchers.deleteUnicorn(unicorn);
  }
}
