// Create a class BankAccount with balance. Add methods deposit() and withdraw().

class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.balance -= amount;
    }

    displayInfo(): void {
        console.log('Balance: ' + this.balance);
    }
}

const acc = new BankAccount(1000);
acc.displayInfo();
acc.deposit(500);
acc.displayInfo();
acc.withdraw(200);
acc.displayInfo();