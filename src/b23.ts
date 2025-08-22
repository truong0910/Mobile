// 23. Create an interface Payment with method pay(amount). Implement CashPayment and
// CardPayment.
interface Payment {
    pay(amount: number): void;
}

class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} in cash.`);
    }
}

class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Paid ${amount} using a card.`);
    }
}

// test
const cashPayment = new CashPayment();
cashPayment.pay(100);

const cardPayment = new CardPayment();
cardPayment.pay(200);
