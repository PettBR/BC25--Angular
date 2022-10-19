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
  nomeCartao: string = 'NOME DO TITULAR';
  numeroCartao: string = '000 000 000 000';
  mm: number | string = 'MM';
  aa: number | string = 'AA';
  cvv: string = '007';
  bandeira: string = 'https://mtf.mastercard.co.za/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg';

  
 

  alterarBandeira(){
    
    if(this.numeroCartao.startsWith('51') || this.numeroCartao.startsWith('52') || this.numeroCartao.startsWith('53') || this.numeroCartao.startsWith('54') || this.numeroCartao.startsWith('55')){ //Mastercard
       this.bandeira = "https://mtf.mastercard.co.za/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg";
    }else if(this.numeroCartao.startsWith('4')){ // Visa
      this.bandeira = "https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png";
    }else if(this.numeroCartao.startsWith('36') || this.numeroCartao.startsWith('38')){ //Diner's Club
      this.bandeira = "https://img.cancaonova.com/cnimages/canais/uploads/sites/12/2016/10/diners.png";
    }else if(this.numeroCartao.startsWith('601 1') || this.numeroCartao.startsWith('65')){ //Discover
      this.bandeira = "https://www.maquinadecartao.com/img/4/discover-logo-bandeira-de-maquininha-de-cartao-david-tech.webp";
    } else if(this.numeroCartao.startsWith('35')){ // JCB
      this.bandeira = "https://boomi.b-cdn.net/wp-content/uploads/2021/06/jcb-8-711789.png";
    } else if(this.numeroCartao.startsWith('34') || this.numeroCartao.startsWith('37')){ //American Express
      this.bandeira = "https://www.mobills.com.br/blog/wp-content/uploads/2022/06/logo-da-bandeira-american-express-amex.png";
    }

  }

  limparCampoNome(){
    this.nomeCartao = ''
  }

  limparCampoNumeroCartao(){
    this.numeroCartao = ''
  }

  limparCampoAnoExpira(){
    this.aa = ''
  }

  limparCampoMesExpira(){
    this.mm = ''
  }

  limparCampoCvv(){
    this.cvv = ''
  }



}
