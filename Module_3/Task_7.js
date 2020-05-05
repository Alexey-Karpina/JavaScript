"use strict";

let Transaction = {
  //   DEPOSIT: "deposit",
  //   WITHDRAW: "withdraw",
  id: 0,
  type: "unknown",
  amount: 0,
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    Transaction = {
      id: this.transactions.length,
      type,
      amount,
    };
    return Transaction;
  },

  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, "deposit"));
    this.balance += amount;
    console.log(`Deposit`);
  },

  withdraw(amount) {
    this.transactions.push(this.createTransaction(amount, "withdraw"));
    this.balance -= amount;
    console.log(`Withdraw`);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let item of this.transactions) {
      if (item["id"] !== id) {
        continue;
      }
      return item;
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let item of this.transactions) {
      if (item["type"] !== type) {
        continue;
      }
      total += item.amount;
    }
    return total;
  },
};

account.deposit(300);
console.log(account.transactions);
console.log(account.getBalance());
account.deposit(500);
console.log(account.getBalance());
console.log(account.transactions);
account.withdraw(300);
account.withdraw(300);
account.withdraw(300);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionTotal("deposit"));
console.log(account.getTransactionTotal("withdraw"));

console.log(account.getTransactionDetails(1));
