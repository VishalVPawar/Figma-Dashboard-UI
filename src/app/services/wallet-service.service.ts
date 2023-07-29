import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private currencyDataSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  currencyData$ = this.currencyDataSubject.asObservable();

  updateCurrencyData(country: string): void {
    this.currencyDataSubject.next(country);
  }
}
