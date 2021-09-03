import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pagges/login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginsComponent } from './logins/logins.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
