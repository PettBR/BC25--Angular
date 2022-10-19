import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao-credito',
  templateUrl: './cartao-credito.component.html',
  styleUrls: ['./cartao-credito.component.css']
})
export class CartaoCreditoComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  nomeCartao: string = 'NOME DO TITULAR'
  numeroCartao: string = '000.000.000.000'
  mm: string = 'MM'
  aa: string = 'AA'
  cvv: string = '007'
  bandeira: string = 'https://mtf.mastercard.co.za/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg'

 

  alterarBandeira(){
    
    if(this.numeroCartao.startsWith('5')){
       this.bandeira = "https://mtf.mastercard.co.za/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg"
    }else if(this.numeroCartao.startsWith('4')){
      this.bandeira = "https://logospng.org/wp-content/uploads/visa.jpg"
    }else if(this.numeroCartao.startsWith('3')){
      this.bandeira = "https://logodownload.org/wp-content/uploads/2017/04/elo-logo-1-1.png"
    }

  }

  limparCampoNome(){
    this.nomeCartao = ''
  }

  limparCampos(){
    this.nomeCartao = ''
    this.numeroCartao = ''
    this.aa = ''
    this.mm = ''
    this.cvv = ''
    
  }



}
