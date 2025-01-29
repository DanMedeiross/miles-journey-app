import { Component, OnInit } from '@angular/core';
import { Offer } from '../../../core/types/type';
import { OfferService } from '../../../core/services/offer.service';

@Component({
  selector: 'app-offers',
  standalone: false,

  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent implements OnInit {
  offers!: Offer[];
  constructor(private service: OfferService) {}

  ngOnInit(): void {
    this.service.list().subscribe(ans => {this.offers = ans;});
  }
}
