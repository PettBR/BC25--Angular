import { Component } from '@angular/core';
import { Produto } from './interfaces/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';

  // p: Produto = {
  //   nome: 'Xbox',
  //   descricao: 'console da microsoft',
  //   estoque: 250,
  //   preco: 4000,
  //   imagem: 'https://http2.mlstatic.com/D_NQ_NP_627914-MLA40655732617_022020-O.webp'
  // };

  
  nome: string = '';
  imagem: string = '';
  preco: number = 0;
  estoque: number = 0;
  descricao: string = '';

  produtos: Produto[] = [];

  adicionarProduto(evento: any): void {
    console.log(evento);
    /**
     * preventDefault() faz com que o comportamento padrão de um elemento HTML seja anulado
     */
    evento.preventDefault();
    /**
     * stopPropagation evita com que a emissão do evento afete outros elementos HTML
     */
    evento.stopPropagation();

    this.produtos.push({
      descricao: this.descricao,
      estoque: this.estoque,
      imagem: this.imagem,
      nome: this.nome,
      preco: this.preco
    });
  };

}
