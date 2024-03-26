import { Component } from "@angular/core";
import { ProgrammiService } from "../services/programmi.service";
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";
import { DialogFormComponent } from "../dialog-form/dialog-form.component";
import { Programma } from "../model/Programma";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  displayedColumns: string[] = [
    "position",
    "name",
    "weight",
    "symbol",
    "edit",
    "delete",
  ];
  dataSource: any;
  constructor(
    private programmiService: ProgrammiService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit() {
    this.programmiService.getProgrammazione().subscribe({
      next: (res: any) => {
        this.dataSource = res;
        console.log(this.dataSource);
      },
    });
    this.programmiService.dataChange.subscribe({
      next: () => {
        this.programmiService.getProgrammazione().subscribe({
          next: (res: any) => {
            this.dataSource = res;
            console.log(this.dataSource);
          },
        });
      },
    });
  }

  modifica(element: Programma) {
    console.log("MODIFICA ELEMENTO ", element);
    this.dialogRef.open(DialogFormComponent, {
      data: {
        programma: element,
      },
    });
  }

  elimina(id: number) {
    console.log("ELIMINA ELEMENTO ", id);
    this.dialogRef.open(DialogComponent, {
      data: {
        id: id,
      },
    });
  }
}
