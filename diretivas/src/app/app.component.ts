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

// Função pra limpar os campos
  limpaCampos(): void {
    this.nome = '';
    this.imagem = '';
    this.preco = 0;
    this.estoque = 0;
    this.descricao = '';
  }

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
      nome: this.nome,
      imagem: this.imagem,
      preco: this.preco,
      estoque: this.estoque,     
      descricao: this.descricao
    });

    // Função pra limpar os campos após enviar
    this.limpaCampos();  
  };

  // removendo o card clicado no outro componente do array deste componente com o splice
  onEventoRemoverCardProd(p: Produto){
    for(let i = 0; i < this.produtos.length; i++ ){
      if(this.produtos[i].nome == p.nome){
        this.produtos.splice(i,1)
      }
    }
  }







}
