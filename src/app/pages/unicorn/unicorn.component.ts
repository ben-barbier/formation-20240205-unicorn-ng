import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { UnicornsService } from '../../shared/services/unicorns.service';
import { UnicornDTO } from '../../shared/dto/unicorn.dto';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-unicorn',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './unicorn.component.html',
  styleUrl: './unicorn.component.scss',
})
export default class UnicornComponent implements OnInit {
  @Input({ required: true, transform: numberAttribute }) id!: number;

  public unicorn?: UnicornDTO;

  constructor(private unicornsService: UnicornsService) {}

  ngOnInit(): void {
    this.unicornsService.get(this.id).subscribe(unicorn => {
      this.unicorn = unicorn;
    });
  }
}
