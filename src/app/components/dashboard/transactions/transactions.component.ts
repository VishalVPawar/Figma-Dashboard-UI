import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

interface Country {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: any[] = [];
  countries: Country[] = [];

  showCountryPopup: boolean = false;
  popupTopPosition: number = 0;
  popupLeftPosition: number = 0;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data.transactions;
      this.extractCountriesFromTransactions();
    });
  }

  extractCountriesFromTransactions(): void {
    const countrySet = new Set<string>();
    this.transactions.forEach(transaction => {
      if (transaction.country) {
        countrySet.add(transaction.country);
      }
    });

    this.countries = Array.from(countrySet).map(country => {
      return { name: country, selected: false };
    });

   
    this.countries.unshift({ name: 'All', selected: false });
  }

  isSelectedCountry(country: string): boolean {
    const selectedCountries = this.countries.filter((c) => c.selected);
    if (selectedCountries.length === 0 || selectedCountries.some((c) => c.name === 'All')) {
      return true;
    }
    return selectedCountries.some((c) => c.name === country);
  }

  saveTransactions(): void {
    this.transactionService.saveTransactions(this.transactions).subscribe();
  }

  toggleCountryPopup(event: MouseEvent) {
    this.showCountryPopup = !this.showCountryPopup;
    if (this.showCountryPopup) {
      const filterIconRect = (event.target as HTMLElement).getBoundingClientRect();
      this.popupTopPosition = filterIconRect.bottom;
      this.popupLeftPosition = filterIconRect.left;
    }
  } 

  onSubmit() {
    const selectedCountries = this.countries.filter((country) => country.selected);
    console.log('Selected Countries:', selectedCountries);
    this.showCountryPopup = false;
  }
}
