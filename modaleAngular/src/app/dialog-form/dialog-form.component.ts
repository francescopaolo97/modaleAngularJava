import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { Programma } from "../model/Programma";
import { ProgrammiService } from "../services/programmi.service";
import { ProgrammaDTO } from "../model/ProgrammaDTO";
import { SuccessDialogComponent } from "../success-dialog/success-dialog.component";

@Component({
  selector: "app-dialog-form",
  templateUrl: "./dialog-form.component.html",
  styleUrls: ["./dialog-form.component.scss"],
})
export class DialogFormComponent {
  titolo: string;
  descrizione: string;
  orario_inizio: string;
  orario_fine: string;
  programmaForm: ProgrammaDTO;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private programmiService: ProgrammiService,
    private dialogRef: MatDialog
  ) {
    this.titolo = data.programma.titolo;
    this.descrizione = data.programma.descrizione;
    this.orario_inizio = data.programma.orario_inizio;
    this.orario_fine = data.programma.orario_fine;
    this.programmaForm = {
      // id: data.programma.id,
      titolo: this.titolo,
      descrizione: this.descrizione,
      orario_inizio: this.orario_inizio,
      orario_fine: this.orario_fine,
    };
  }
  eseguiModifica() {
    this.programmiService
      .modificaProgramma(this.data.programma.id, this.programmaForm)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.dialogRef.open(SuccessDialogComponent, {
            data: {
              variabile: "Modifica",
            },
          });
          this.programmiService.onDataChange();
          this.closeDialog();
        },
      });
    this.dialogRef.closeAll();
  }

  closeDialog() {
    setTimeout(() => {
      this.dialogRef.closeAll();
    }, 2000);
  }
}
