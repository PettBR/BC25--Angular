import { Component } from '@angular/core';
import { CartaoDeCredito } from './interfaces/CartaoDeCredito';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cartao-credito-professor';
  formCartaoDeCredito: CartaoDeCredito = {
  ano: '',
  cvc: '',
  mes: '',
  nome: '',
  numero: ''
}
}
