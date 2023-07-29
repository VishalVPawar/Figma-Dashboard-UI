import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { MoneyboxComponent } from './components/moneybox/moneybox.component';
import { NeedhelpComponent } from './components/needhelp/needhelp.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SecuritiesComponent } from './components/securities/securities.component';
import { SettingComponent } from './components/setting/setting.component';
import { PaymentsComponent } from './components/payments/payments.component';



const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'moneybox', component: MoneyboxComponent },
  { path: 'securities', component: SecuritiesComponent },
  { path: 'help', component: NeedhelpComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
