import { Generator } from "../utils/generator";

export class CreditCard {
  id: number;
  franchise: string;
  cardNumber: string;
  purchases: number;
  requiredPurchases: number;
  billingCicle: number;

  static of(franchise: string, cardNumber: string, requiredPurchases: number, billingCicle: number = 1): CreditCard {
    return {
      id: Generator.randomId(),
      franchise: franchise,
      cardNumber: cardNumber,
      purchases: 0,
      requiredPurchases: requiredPurchases,
      billingCicle: billingCicle
    };
  }
}
