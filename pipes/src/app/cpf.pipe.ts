import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string|number): string {
    let numeroCpfFormatado = value + '';
/**
 * Item 1: Caso o tamanho do valor seja menor que 11, completaremos com zeros à esquerda.
 * Item 2: Caso o tamanho da string seja maior que 11, vamos pegar apenas até a décima primeira posição.
 * Item 3: Vamos retirar do valor qualquer coisa que não seja um número. Então se chegar algo como 111-22233344 o resultado será 11122233344
 * Item 4: Vamor extraír 3 grupos de 3 dígitos e depois 1 grupo de 2 dígitos para formatar o CPF conforme o seguinte: (3 dígitos).(3 dígitos).(3 dígitos)-(2 dígitos):
 */


    numeroCpfFormatado = numeroCpfFormatado
    .padStart(11, '0') // Item 1
            .substr(0, 11) // Item 2
            .replace(/[^0-9]/, '') // Item 3
            .replace(// Item 4
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                '$1.$2.$3-$4'
            );

    return numeroCpfFormatado;
  }

}
