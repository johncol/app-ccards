import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { environment } from '../../../environments/environment';
import { CreditCard } from '../../shared/model/credit-card.model';

const STORAGE_KEY: string = 'ccards';

@Injectable()
export class RepositoryService {
  defaultCards: CreditCard[] = [
    { id: 1, franchise: 'Visa Platinum', cardNumber: '8047', purchases: 4 },
    { id: 2, franchise: 'Mastercard AAdvantage', cardNumber: '8396', purchases: 1 },
    { id: 3, franchise: 'Mastercard Prestige', cardNumber: '0692', purchases: 0 },
  ];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.initLists();
  }

  get(): CreditCard[] {
    return <CreditCard[]>this.storage.get(STORAGE_KEY);
  }

  save(cards: CreditCard[]): void {
    this.storage.set(STORAGE_KEY, cards);
  }

  private initLists(): void {
    const storageList: number[] = this.storage.get(STORAGE_KEY);
    if (storageList == null || environment.resetStorage) {
      this.storage.set(STORAGE_KEY, this.defaultCards);
    }
  }
}
