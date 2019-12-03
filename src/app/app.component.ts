import { Component, OnInit } from '@angular/core';
import { AccountService } from './services';
import { Account } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    public accountService: AccountService
  ) {
  }

  accounts: Account[];

  ngOnInit() {
    this.accounts = this.accountService.getAll();
  }

}
