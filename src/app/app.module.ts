import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavModule } from '@parvathyg/nav';
import { ServicesModule } from '@parvathyg/services';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavToolComponent } from './nav-tool/nav-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavToolComponent
  ],
  imports: [
    BrowserModule,
    NavModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NavToolComponent]
})
export class AppModule { }
