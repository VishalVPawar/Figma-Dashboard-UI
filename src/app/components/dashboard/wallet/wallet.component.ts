import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { WalletService } from 'src/app/services/wallet-service.service';

interface CurrencyData {
  country: string;
  currency: string;
  balance: string;
}

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  currencyData: CurrencyData[] = [];
  selectedCountry: string = 'USA';
  selectedData: CurrencyData | undefined;
  constructor(
    private transactionService: TransactionService,
    private walletService: WalletService
  ) {}

  fetchData(): void {
    this.transactionService.getTransactions().subscribe((data: any) => {
      this.currencyData = data.dashcurrency.data;
  
      // Find the data for USA
      const usaData = this.currencyData.find((currency: any) => currency.country === 'USA');
      if (usaData) {
        this.selectedCountry = 'USA';
        this.selectedData = usaData;
      }
    });
  }
  
  ngOnInit(): void {
    this.fetchData();

    this.walletService.currencyData$.subscribe((country: string) => {
      this.selectedCountry = country;
    });
  }
}
