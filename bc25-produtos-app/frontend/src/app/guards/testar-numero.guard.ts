import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestarNumeroGuard implements CanActivate {
  canActivate(
    
    route: ActivatedRouteSnapshot, // objeto que permite recuperar os parâmetros passados para a rota
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // saber se o id informado é um número ou não
      // se for um número → pode seguir
      // se não for um número → não pode seguir

      // recuperar o parâmetro que guarda o valor do id
      const idProduto = route.paramMap.get('idProduto')

      if (isNaN(Number(idProduto))) { // se é um número é um NaN
        // return this.router.navigateByUrl('/produtos')
        return false
      } else {
      return true
    }
  }
  
}
