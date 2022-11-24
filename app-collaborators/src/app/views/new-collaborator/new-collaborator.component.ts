import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Collaborator } from 'src/app/models/collaborator';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-new-collaborator',
  templateUrl: './new-collaborator.component.html',
  styleUrls: ['./new-collaborator.component.css']
})
export class NewCollaboratorComponent implements OnInit {

  public formCollaborator: FormGroup;

  public isLoadUpload: boolean = false;
  private fotoUrl: string = "";

  constructor(fb: FormBuilder,
    private notification: NotificationService,
    private collaboratorService: CollaboratorService,
    private router: Router,
    private uploadService: UploadService
    ) {
    this.formCollaborator = fb.group({
      nome: ["", [Validators.required]],
      cpf: ["", [Validators.required]],
      dataNascimento: ["", [Validators.required]],
      cargo: ["", [Validators.required]],
      setor: ["", [Validators.required]],
      estado: ["", [Validators.required]],
      cidade: ["", [Validators.required]],
      remuneracao: ["", [Validators.required, Validators.min(0)]],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
  }

  public createCollaborator(): void {
    if(this.formCollaborator.valid) {
      const collaborator: Collaborator = this.formCollaborator.value;
      // Adicionando a foto ao colaborador:
      collaborator.fotoUrl = this.fotoUrl;
      // Enviar para o BANCO DE DADOS
      this.collaboratorService.createCollaborator(collaborator).subscribe(response => {
        console.log(collaborator);
        this.notification.showMessage("Cadastrado com sucesso.");
        this.router.navigate(["/dashboard"]);
      });
    } else {
      this.notification.showMessage("Dados inválidos.")
    }
  }

  public uploadFile(event: any): void {
    this.isLoadUpload = true;
    const file: File = event.target.files[0];
        // Fazendo UPLOAD  do arquivo para o Firebase
    this.uploadService.uploadFoto(file).subscribe(uploadResult  => {
      this.isLoadUpload = false;
      const storageReference = uploadResult.ref;
      const promiseFileUrl = storageReference.getDownloadURL();
      promiseFileUrl.then((fotoUrl: string) => {
        this.fotoUrl = fotoUrl;
      })
    });
  }

}
