import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  // Método 1
/*   dadosForm: FormGroup = new FormGroup({
    nome: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl(''),
    endereco: new FormGroup({
      cep: new FormControl(''),
      rua: new FormControl(''),
      complemento: new FormControl(''),
      numero: new FormControl('')
    })
  }) */

  // Método 2

  /**
   * O método group() do formBuilder é responsável por criar um novo objeto do tipo FormGroup
   */
  dadosForm: FormGroup = this.fb.group({
    nome: ['', [ Validators.required, Validators.minLength(3) ]], /* [''] = new FormControl('') */
    email: ['', [ Validators.required, Validators.email ]],
    senha: ['', [ Validators.required, Validators.minLength(8) ]],
    endereco: this.fb.group({
      cep:[''],
      rua: [''],
      complemento: [''],
      numero: ['']
    }),
    telefones: this.fb.array([
      [''] // Pode utilizar new FormControl('')
    ])
  })

  /**
   * Transformar o Abstract Control → Form Array
   */
  tels = this.dadosForm.get('telefones') as FormArray

  /*
    Form Builder → Objeto que permite criar FormControls, FormGroups ou FormArrays com uma sintaxe menor
  */

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviar() {
    /*
      A propriedade 'value' do formControl possui o valor que foi digitado dentro do campo do formulário
    */
    
      console.log(this.dadosForm.value)
  }

  adicionarCampoDeTelefone() {
    this.tels.push(new FormControl(''))
  }

  deleteTelefone(i:number) {
    this.tels.removeAt(i)
  }

}
