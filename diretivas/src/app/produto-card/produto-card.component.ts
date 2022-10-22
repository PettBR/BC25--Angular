import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Component({
  selector: 'produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {

  @Input()
  prod: Produto = {
    descricao: '',
    estoque: 0,
    imagem: '',
    nome: '',
    preco: 0
  }

  mostrarProduto: boolean = true;

  escondeMostraProd(): void {
    this.mostrarProduto = !this.mostrarProduto
  }
  

  // emitir o evento do componente produto-card para o componente app
  @Output() 
  eventoRemoverCardProd = new EventEmitter<any>();

  onClickRemove(){
    this.eventoRemoverCardProd.emit(this.prod);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
