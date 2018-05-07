import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../../../shared/model/credit-card.model';
import { CreditCardsService } from '../../services/credit-cards.service';

@Component({
  selector: 'cc-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  cards: CreditCard[] = [];

  constructor(private cardsService: CreditCardsService) { }

  ngOnInit() {
    this.cardsService.findAll().subscribe(cards => this.cards = cards);
  }

}
