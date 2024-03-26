import { Component } from "@angular/core";
import { ProgrammiService } from "./services/programmi.service";
import { Programma } from "./model/Programma";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "modaleAngular";

  // listaProgrammi: Programma[] = [
  //   {
  //     id: 1,
  //     titolo: 'Mattino Cinque',
  //     descrizione:
  //       'Programma di informazione e approfondimento condotto da Federica Panicucci.',
  //     orario_inizio: '08:00',
  //     orario_fine: '10:00',
  //   },
  //   {
  //     id: 2,
  //     titolo: 'Forum',
  //     descrizione:
  //       'Il tribunale televisivo che risolve i casi giudiziari di tutti i giorni.',
  //     orario_inizio: '10:00',
  //     orario_fine: '12:00',
  //   },
  //   {
  //     id: 3,
  //     titolo: 'Il Segreto',
  //     descrizione: 'Soap opera ambientata a Puente Viejo.',
  //     orario_inizio: '12:00',
  //     orario_fine: '13:00',
  //   },
  //   {
  //     id: 4,
  //     titolo: 'TG5',
  //     descrizione: 'Le notizie del giorno raccontate dalla redazione del TG5.',
  //     orario_inizio: '13:00',
  //     orario_fine: '13:30',
  //   },
  //   {
  //     id: 5,
  //     titolo: 'Beautiful',
  //     descrizione:
  //       'Le vicende della famiglia Forrester, proprietaria di una casa di moda a Los Angeles.',
  //     orario_inizio: '13:30',
  //     orario_fine: '14:00',
  //   },
  //   {
  //     id: 6,
  //     titolo: 'Pomeriggio Cinque',
  //     descrizione:
  //       "Appuntamento pomeridiano con l'informazione, condotto da Barbara D'Urso.",
  //     orario_inizio: '14:00',
  //     orario_fine: '16:00',
  //   },
  //   {
  //     id: 7,
  //     titolo: 'Amici',
  //     descrizione:
  //       'Il talent show di Maria De Filippi che scopre i talenti della danza e del canto.',
  //     orario_inizio: '16:00',
  //     orario_fine: '18:00',
  //   },
  // ];

  constructor(private programmiService: ProgrammiService) {}

  // ngOnInit() {
  //   this.programmiService.programmi = this.listaProgrammi;
  // }

  ngOnInit() {
    this.programmiService.getProgrammazione().subscribe({
      next: (res: any) => {
        this.programmiService.programmi = res;
        console.log(
          "Variabile programmi nel service settata con : ",
          this.programmiService.programmi
        );
      },
    });
  }
}
