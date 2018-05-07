import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageServiceModule } from 'angular-webstorage-service';

import { PurchaseCounterRoutingModule } from './purchase-counter-routing.module';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { MaterialModule } from '../material/material.module';
import { CreditCardsService } from './services/credit-cards.service';
import { RepositoryService } from './services/repository.service';

@NgModule({
  imports: [
    CommonModule,
    PurchaseCounterRoutingModule,
    MaterialModule,
    StorageServiceModule
  ],
  declarations: [CardsListComponent, CreditCardComponent],
  providers: [
    CreditCardsService,
    RepositoryService
  ]
})
export class PurchaseCounterModule { }
