import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FilmesAPIService {
  /* Dados fornecidos pelo themoviedb */
  PUBLIC_KEY = 'a7af9e05cc2bd7f738573f2fc08b857a';

  URL_API = `https://api.themoviedb.org/3/movie/550?api_key=${this.PUBLIC_KEY}`;
  
  constructor(private http: HttpClient) { }

    /**
   * Métodos HTTP
   * Leitura de dados -> GET
   * Criação de dados -> POST
   * Atualização de dados -> PUT
   * Deleção de dados -> DELETE
   */

    



}