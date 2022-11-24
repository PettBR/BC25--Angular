import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from 'src/app/components/details/details.component';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Collaborator } from './../../models/collaborator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['foto', 'nome', 'email', 'cpf', 'cargo', 'setor', 'excluir', 'editar', 'detalhes'];
  dataSource: Collaborator[] = [];

  constructor(
    private collaboratorService: CollaboratorService,
    private notification: NotificationService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    // CAPTURAR OS DADOS DO FIRESTORE E PREENCHER O VETOR DE COLABORADORES
    this.collaboratorService.findAll().subscribe(collaborators => {
      this.dataSource = collaborators;
    })
  }

  public deleteCollaborator(id: string): void {
    this.collaboratorService.deleteCollaborator(id).subscribe(response => {
      this.notification.showMessage("Apagado.");
      this.initializeTable();
    })
  }

  public openDetails(collaborator: Collaborator): void {
    // Abrir Cixa de diálogo com informações do colaborador
    this.dialog.open(DetailsComponent, {
      width: "400px",
      data: collaborator
    })

  }

}
