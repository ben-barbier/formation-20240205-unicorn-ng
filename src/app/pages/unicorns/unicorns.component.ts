import { Component } from '@angular/core';
import { UnicornsService } from '../../shared/services/unicorns.service';
import { RouterLink } from '@angular/router';
import { UnicornCardComponent } from './unicorn-card/unicorn-card.component';
import { Unicorn } from '../../shared/models/unicorn.model';

@Component({
  selector: 'app-unicorns',
  standalone: true,
  imports: [RouterLink, UnicornCardComponent],
  templateUrl: './unicorns.component.html',
  styleUrl: './unicorns.component.scss',
})
export default class UnicornsComponent {
  public unicorns: Unicorn[] = [];

  constructor(private unicornsService: UnicornsService) {
    this.unicornsService.getAllWithCapacitiesLabels().subscribe(unicorns => {
      this.unicorns = unicorns;
    });
  }

  public removeUnicorn(unicorn: Unicorn) {
    this.unicornsService.deleteUnicorn(unicorn).subscribe(() => {
      this.unicorns = this.unicorns.filter(u => u.id !== unicorn.id);
    });
  }
}
