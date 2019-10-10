import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
// import {ChartModule} from 'primeng/chart';
import { TableComponent } from './shared/table/table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {DialogModule} from 'primeng/dialog';
import {MenuModule} from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EligibleComponent } from './components/eligible/eligible.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccsummaryComponent } from './components/accsummary/accsummary.component';
import { LoansummaryComponent } from './components/loansummary/loansummary.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { SummaryComponent } from './shared/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginnComponent } from './components/loginn/loginn.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EligibleComponent,
    RegisterComponent,
    LoginComponent,
    TableComponent,
    AccsummaryComponent,
    LoansummaryComponent,
    TransactionsComponent,
    SummaryComponent,
    DashboardComponent,
    LoginnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    CardModule,
    TabViewModule,
    InputTextModule,
    PanelModule,
    BrowserAnimationsModule,
    MenuModule,
    BrowserModule,
    AppRoutingModule,
    // ChartModule,
    CardModule,
    Ng2SmartTableModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
