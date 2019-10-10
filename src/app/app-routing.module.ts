import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EligibleComponent } from './components/eligible/eligible.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccsummaryComponent } from './components/accsummary/accsummary.component';
import { LoansummaryComponent } from './components/loansummary/loansummary.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'eligible', component: EligibleComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'summary', component: AccsummaryComponent},
  { path: 'loansummary', component: LoansummaryComponent},
  { path: 'transactions', component: TransactionsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', component: LoginComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
