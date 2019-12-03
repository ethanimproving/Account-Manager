import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services';
import { Account } from '../models';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor(
    public accountService: AccountService
  ) {  }

  accounts: Account[];

  ngOnInit() {
    this.accounts = this.accountService.getAll();
  }

}
