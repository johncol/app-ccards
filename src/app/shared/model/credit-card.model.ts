import { Generator } from "../utils/generator";

export class CreditCard {
  id: number;
  franchise: string;
  cardNumber: string;
  purchases: number;
  requiredPurchases: number;

  static of(franchise: string, cardNumber: string, requiredPurchases: number): CreditCard {
    return {
      id: Generator.randomId(),
      franchise: franchise,
      cardNumber: cardNumber,
      purchases: 0,
      requiredPurchases: requiredPurchases
    };
  }
}
