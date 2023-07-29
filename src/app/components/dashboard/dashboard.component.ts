import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { WalletService } from 'src/app/services/wallet-service.service';

interface Country {
  name: string;
  selected: boolean;
}

interface Option {
  value: string;
  label: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  firstname: string = '';
  data: any = {};
  initialData: any = {};
  selectedOption: string = 'option1';
  options: Option[] = [];
  income: string = '';
  expense: string = '';
  saving: string = '';

  @Output() walletUpdated: EventEmitter<any> = new EventEmitter();

  constructor(
    private transactionService: TransactionService,
    private walletService: WalletService
  ) {}
  ngOnInit(): void {
    this.transactionService.getTransaction().subscribe((data: any) => {
      this.firstname = data.users[0].firstname;
      this.initialData = data;
      this.data = this.initialData.dashcurrency.data[0];
      
      // Update the options for the select element
      this.options = this.initialData.options;

      // Initialize the income, expense, and saving values
      this.income = this.initialData.dashcurrency.data[0].income;
      this.expense = this.initialData.dashcurrency.data[0].expense;
      this.saving = this.initialData.dashcurrency.data[0].saving;
      this.selectedOption = this.options[0].value;

      this.walletService.updateCurrencyData(this.selectedOption);
    });
  }
  onOptionChange(): void {
    const selectedData = this.initialData.dashcurrency.data.find(
      (item: any) => item.country.toLowerCase() === this.selectedOption
    );

    if (selectedData) {
      this.income = selectedData.income;
      this.expense = selectedData.expense;
      this.saving = selectedData.saving;
      this.data = selectedData;
      
      this.walletService.updateCurrencyData(selectedData.country);
    }
  }

  fetchData(): void {
    this.transactionService.getTransactions().subscribe((data: any) => {
      this.initialData = data;
      this.data =
        this.selectedOption === 'option2'
          ? this.initialData.dashcurrency.data[1]
          : this.initialData.dashcurrency.data[0];
      
    });
  }

 
}
