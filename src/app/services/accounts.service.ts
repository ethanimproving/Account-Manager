import { Injectable } from '@angular/core';
import { Account } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: Account[] = [
    new Account({
      id:1,
      name: 'Ethan',
      email: 'afdasdf',
      isEmployee: false,
      departmentId: 0,
      phoneNumbers: []
    }),
    new Account({
      id:2,
      name: 'Paul',
      email: 'yoooo@jill.fuzzy',
      isEmployee: false,
      departmentId: 0,
      phoneNumbers: []
    }),
    new Account({
      id:3,
      name: 'Luke',
      email: 'wamp',
      isEmployee: false,
      departmentId: 0,
      phoneNumbers: []
    }),
    new Account({
      id:4,
      name: 'Caleb',
      email: 'afdasdf',
      isEmployee: false,
      departmentId: 0,
      phoneNumbers: []
    })
  ];

  getAll(): Account[] {
    return this.accounts;
  }

  get(id: number): Account {
    for (let ii = 0; ii < this.accounts.length; ii++) {
      if (this.accounts[ii].id === id) {
        return this.accounts[ii];
      }
      return null;
    }
  }
}