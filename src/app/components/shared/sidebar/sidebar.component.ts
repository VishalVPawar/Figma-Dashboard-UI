import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  firstname: string = '';
  lastname:string='';
  email: string='';

constructor(private transactiionService: TransactionService)
{}
ngOnInit() {
  this.transactiionService.getTransactions().subscribe((data) => {
    this.firstname = data.users[0].firstname;
    this.lastname = data.users[0].lastname;
    this.email=data.users[0].email;
  });
}
}

