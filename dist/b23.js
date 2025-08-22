"use strict";
class CashPayment {
    pay(amount) {
        console.log(`Paid ${amount} in cash.`);
    }
}
class CardPayment {
    pay(amount) {
        console.log(`Paid ${amount} using a card.`);
    }
}
// test
const cashPayment = new CashPayment();
cashPayment.pay(100);
const cardPayment = new CardPayment();
cardPayment.pay(200);
