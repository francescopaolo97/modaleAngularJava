import { Injectable } from "@angular/core";
import { Programma } from "../model/Programma";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProgrammaDTO } from "../model/ProgrammaDTO";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProgrammiService {
  programmi: Programma[];
  private API_URL = "http://localhost:8080/api/programma/";
  public dataChange: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {
    this.programmi = [];
  }

  getProgrammazione() {
    return this.http.get(this.API_URL + "getProgrammazione");
  }

  eliminaProgramma(id: number): Observable<any> {
    return this.http.delete<any>(this.API_URL + `eliminaProgramma?id=${id}`);
  }

  modificaProgramma(id: number, programma: ProgrammaDTO) {
    console.log(id, programma);

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http.put(
      this.API_URL + `modificaProgramma?id=${id}`,
      programma,
      { headers: headers }
    );
  }

  inserisciProgramma(programma: ProgrammaDTO) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post(this.API_URL + "inserisciProgramma", programma, {
      headers: headers,
    });
  }

  onDataChange() {
    this.dataChange.next();
  }
}
