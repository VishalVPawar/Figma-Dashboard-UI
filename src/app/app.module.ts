import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserModule } from '@angular/platform-browser';
import { AngularToastifyModule } from 'angular-toastify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingComponent } from './components/setting/setting.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { MoneyboxComponent } from './components/moneybox/moneybox.component';
import { SecuritiesComponent } from './components/securities/securities.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NeedhelpComponent } from './components/needhelp/needhelp.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { PiechartComponent } from './components/dashboard/piechart/piechart.component';
import { WalletComponent } from './components/dashboard/wallet/wallet.component';
import { TransactionsComponent } from './components/dashboard/transactions/transactions.component';
import { QtransferComponent } from './components/dashboard/qtransfer/qtransfer.component';
import { TransactionService } from './services/transaction.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    DashboardComponent,
    AnalyticsComponent,
    PaymentsComponent,
    DepositComponent,
    MoneyboxComponent,
    SecuritiesComponent,
    ProfileComponent,
    NeedhelpComponent,
    NotfoundComponent,
    NavbarComponent,
    SidebarComponent,
    PiechartComponent,
    WalletComponent,
    TransactionsComponent,
    QtransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    DropdownModule,

		ButtonModule,
    MultiSelectModule,
    DialogModule,
    AngularToastifyModule,
    OverlayModule,
    NgbDropdownModule,
    MatFormFieldModule,
		SliderModule,
		ContextMenuModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule
   
  ],
  providers: [TransactionService, ],
  bootstrap: [AppComponent],
})
export class AppModule {}
