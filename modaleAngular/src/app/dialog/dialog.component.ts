import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { SuccessDialogComponent } from "../success-dialog/success-dialog.component";
import { ProgrammiService } from "../services/programmi.service";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialog,
    private programmiService: ProgrammiService
  ) {}

  ngOnInit() {
    console.log(
      "DATA NEL COMPONENTE DIALOG CHE PASSO DAL HOME QUANDO APRO IL DIALOG",
      this.data
    );
  }

  confermaEliminazione() {
    this.programmiService.eliminaProgramma(this.data.id).subscribe({
      next: () => {
        console.log("ELIMINAZIONE PROGRAMMA AVVENUTA CON SUCCESSO");
        this.dialogRef.open(SuccessDialogComponent, {
          data: {
            variabile: "Eliminazione",
          },
        });
        this.programmiService.onDataChange();
        this.closeDialog();
      },
    });
  }

  closeDialog() {
    setTimeout(() => {
      this.dialogRef.closeAll();
    }, 2000);
  }
}
