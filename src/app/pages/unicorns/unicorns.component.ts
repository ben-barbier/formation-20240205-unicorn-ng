import { Component } from '@angular/core';
import { UnicornDTO } from '../../shared/dto/unicorn.dto';
import { UnicornsService } from '../../shared/services/unicorns.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unicorns',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './unicorns.component.html',
  styleUrl: './unicorns.component.scss',
})
export class UnicornsComponent {
  public unicorns: UnicornDTO[] = [];

  constructor(private unicornsService: UnicornsService) {
    this.unicornsService.getUnicorns().subscribe(unicorns => {
      this.unicorns = unicorns;
    });
  }
}
