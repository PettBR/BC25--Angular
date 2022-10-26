import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  /**
   * Reactive Forms possui estruturas para representar
   * o formulário dentro do TypeScript
   */

  /**
   * FormControl representa um elemento do seu formulário
   */

  // Aqui as 3 linhas abaixo são desnecessárias com o formGroup, estão aqui só de referência:
  nome: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  senha: FormControl = new FormControl('');
  // --------------------------

  /**
   * FormGroup é uma estrutura do Reactive Forms que permite agruparmos form controls dentro dela, para que o acesso aos valores seja mais simples
   */
  dadosForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  enviar() {
    /*
      A propriedade 'value' do formControl possui o valor que foi digitado dentro do campo do formulário
    */
    
    console.log(this.nome.value);
    console.log(this.email.value);
    console.log(this.senha.value);
  }

}
