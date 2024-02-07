import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './layout/nav/nav.component';
import { CapacitiesDispatchers } from './store/dispatchers/capacities.dispatchers';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavComponent],
})
export class AppComponent {
  constructor(capacitiesDispatchers: CapacitiesDispatchers) {
    capacitiesDispatchers.loadCapacities();
  }
}
