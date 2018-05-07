import { Component, OnInit, Input } from '@angular/core';
import { CreditCard } from '../../../shared/model/credit-card.model';
import { CreditCardsService } from '../../services/credit-cards.service';

@Component({
  selector: 'cc-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  @Input() card: CreditCard;

  constructor(private cardService: CreditCardsService) { }

  ngOnInit() {
  }

  increment(): void {
    this.cardService.incrementPurchases(this.card.id)
      .subscribe(purchases => this.card.purchases = purchases);
  }

  decrement(): void {
    this.cardService.decrementPurchases(this.card.id)
      .subscribe(purchases => this.card.purchases = purchases);
  }

}
