import { Component } from "@angular/core";
import { ProgrammaDTO } from "../model/ProgrammaDTO";
import { ProgrammiService } from "../services/programmi.service";

@Component({
  selector: "app-aggiungi",
  templateUrl: "./aggiungi.component.html",
  styleUrls: ["./aggiungi.component.scss"],
})
export class AggiungiComponent {
  titolo!: string;
  descrizione!: string;
  orario_inizio!: string;
  orario_fine!: string;

  programma!: ProgrammaDTO;
  constructor(private programmiService: ProgrammiService) {}

  ngOnInit() {}

  aggiungi() {
    this.programma = {
      titolo: this.titolo,
      descrizione: this.descrizione,
      orario_inizio: this.orario_fine,
      orario_fine: this.orario_fine,
    };
    this.programmiService.inserisciProgramma(this.programma).subscribe({
      next: (res: any) => {
        this.programmiService.onDataChange();
        console.log(res);
      },
    });
  }
}
