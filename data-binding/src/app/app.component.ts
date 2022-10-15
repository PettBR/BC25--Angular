import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * String Interpolation: utilizar valores que propriedades possuem para mostrá-los para o usuário
   */

  /**
   * property binding: utilizar valores de propriedades e atribuí-los a atributos HTML
   */

  /**
   * event binding utilizado para ouvir eventos da DOM dentro do Angular
   */

  /**
   * Two Way data binding
   */

  title = 'data-binding';
  n1: number = 0;
  n2: number = 0;

  tipoInput: string = 'password'
  
  somar(x: number, y: number) {
    return x + y
  };

  mudarTipoDoInput(): void {
    if(this.tipoInput == 'password'){
      this.tipoInput = 'text';
    } else{
      this.tipoInput = 'password';
    }
  };

  

  aumentarValor(): void {
    this.n1 += 1;
  }

  diminuirValor(): void {
    this.n2 -=1;
  }


  
}
