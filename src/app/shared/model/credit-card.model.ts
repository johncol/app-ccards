export class CreditCard {
  id: number;
  franchise: string;
  cardNumber: string;
  purchases: number;

  static of(franchise: string, cardNumber: string): CreditCard {
    return {
      id: new Date().getMilliseconds(),
      franchise: franchise,
      cardNumber: cardNumber,
      purchases: 0
    };
  }
}
