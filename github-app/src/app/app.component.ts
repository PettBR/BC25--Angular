import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GithubRepo } from './interfaces/GithubRepos';
import { GithubUser } from './interfaces/GithubUser';
import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  gUser!: GithubUser // undefined
  repos: GithubRepo[] = []

  constructor(
    private fb: FormBuilder,
    private githubService: GithubApiService,
    private snackBar: MatSnackBar // componente do material 
  ) {}

  procurar() {
    const username = this.githubForm.get('username')?.value // recuperando o nome de usuário que deve ser procurado

    /**
     * → Ordem das funções dentro do Subscribe
     * → 1°: Sucesso
     * → 2°: Erro
     * → 3°: Completo
     */

    this.githubService.procurarUsuario(username).subscribe(
      (user) => {
        this.gUser = user
      },
      (erro) => {
        // HttpErrorResponse
        // preciso saber se o meu erro vem dessa classe

        if (erro instanceof HttpErrorResponse) {
          if(erro.status == 404){
            this.snackBar.open(`Usuário ${username} não encontrado (╥﹏╥)`, 'Ok ¯\_(ツ)_/¯' ) // abrindo o snackbar na tela
          }
        }
      }
    )

    this.githubService.procurarRepos(username).subscribe(
      (repos) => {
        this.repos = repos;
      })

  }
}
