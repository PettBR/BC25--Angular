import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartaoCreditoComponent } from './cartao-credito/cartao-credito.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaoCreditoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //ngModel
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
