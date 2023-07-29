import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly dbUrl = 'assets/db.json';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<any> {
    return this.http.get<any>(this.dbUrl);
  }

  getTransaction(): Observable<any> {
    return this.http.get<any>(this.dbUrl).pipe(
      map((data) => {
        // Extract the country names from the data and store them in the options array
        const options = data.dashcurrency.data.map((item: any) => ({
          value: item.country.toLowerCase(),
          label: item.country
        }));
        data.options = options;
        return data;
      }),
      catchError((error) => {
        console.log('Error:', error);
        return throwError(error);
      })
    );
  }
   saveTransactions(transactions: any[]): Observable<any> {
    const data = { transactions };
    return this.http.put<any>(this.dbUrl, data);
  }

  getChartDataForDuration(duration: string): Observable<any> {
    return this.http.get<any>(`/api/chart-data/${duration}`);
  }
}
