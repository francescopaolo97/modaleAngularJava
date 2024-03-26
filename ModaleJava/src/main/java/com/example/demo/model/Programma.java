package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Programma {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String titolo;
	private String descrizione;
	private String orario_inizio;
	private String orario_fine;
	
	public Programma() {
		super();
	}

	public Programma(long id, String titolo, String descrizione, String orario_inizio, String orario_fine) {
		super();
		this.id = id;
		this.titolo = titolo;
		this.descrizione = descrizione;
		this.orario_inizio = orario_inizio;
		this.orario_fine = orario_fine;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public String getOrario_inizio() {
		return orario_inizio;
	}

	public void setOrario_inizio(String orario_inizio) {
		this.orario_inizio = orario_inizio;
	}

	public String getOrario_fine() {
		return orario_fine;
	}

	public void setOrario_fine(String orario_fine) {
		this.orario_fine = orario_fine;
	}
}

