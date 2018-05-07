import { Injectable } from '@angular/core';
import { CreditCard } from '../../shared/model/credit-card.model';

import { Observable, of } from 'rxjs';
import { RepositoryService } from './repository.service';

@Injectable()
export class CreditCardsService {
  cards: CreditCard[];

  constructor(private repository: RepositoryService) {
    this.cards = this.repository.get();
  }

  findAll(): Observable<CreditCard[]> {
    return this.rawObservableCopyOf(this.cards);
  }

  create(franchise: string, cardNumber: string): Observable<CreditCard> {
    const creditCard: CreditCard = CreditCard.of(franchise, cardNumber);
    this.cards.push(creditCard);
    this.repository.save(this.cards);
    return this.rawObservableCopyOf(creditCard);
  }

  incrementPurchases(creditCardId: number, amount: number = 1): Observable<number> {
    const creditCard: CreditCard = this.modifyPurchases(creditCardId, amount);
    return of(creditCard.purchases);
  }

  decrementPurchases(creditCardId: number, amount: number = 1): Observable<number> {
    const creditCard: CreditCard = this.modifyPurchases(creditCardId, -1 * amount);
    return of(creditCard.purchases);
  }

  private rawObservableCopyOf(data: any): Observable<any> {
    return of(JSON.parse(JSON.stringify(data)));
  }

  private modifyPurchases(creditCardId: number, amount: number): CreditCard {
    const creditCard: CreditCard = this.findById(creditCardId);
    if (creditCard.purchases + amount >= 0) {
      creditCard.purchases = creditCard.purchases + amount;
      this.repository.save(this.cards);
    }
    return creditCard;
  }

  private findById(creditCardId: number): CreditCard {
    const filteredCards: CreditCard[] = this.cards.filter(creditCard => creditCard.id === creditCardId);
    if (filteredCards.length === 0) {
      throw new Error('Credit card not found');
    }
    if (filteredCards.length > 1) {
      throw new Error('More than one credit card found');
    }
    return filteredCards[0];
  }

}
