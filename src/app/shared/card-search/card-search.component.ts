import { Component, Input } from '@angular/core';
import { Offer } from '../../core/types/type';

@Component({
  selector: 'app-card-search',
  standalone: false,

  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.scss'
})
export class CardSearchComponent {
  @Input() offer!: Offer;
}
