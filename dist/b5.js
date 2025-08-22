"use strict";
// Create a class BankAccount with balance. Add methods deposit() and withdraw().
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    displayInfo() {
        console.log('Balance: ' + this.balance);
    }
}
const acc = new BankAccount(1000);
acc.displayInfo();
acc.deposit(500);
acc.displayInfo();
acc.withdraw(200);
acc.displayInfo();
