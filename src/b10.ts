// Create a class Account with public, private and readonly fields.

class Account {
  public accountNumber: string;   
  private balance: number;       
  readonly owner: string;       

  constructor(accountNumber: string, owner: string, balance: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Deposit amount must be positive!");
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Invalid withdraw amount!");
    }
  }

  // Lấy số dư
  getBalance(): number {
    return this.balance;
  }
}


const acc1 = new Account("12345", "Alice", 500);

console.log(`Owner: ${acc1.owner}`); 
console.log(`Account Number: ${acc1.accountNumber}`); 

acc1.deposit(200);
acc1.withdraw(100);

console.log(`Final Balance: ${acc1.getBalance()}`); 


