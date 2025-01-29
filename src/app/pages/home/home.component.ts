import { Component, OnInit } from '@angular/core';
import { Offer } from '../../core/types/type';
import { OfferService } from '../../core/services/offer.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private offerService : OfferService) {}

  ngOnInit(): void {
    this.offerService.list().subscribe(answer => {console.log(answer)});
  }
}
