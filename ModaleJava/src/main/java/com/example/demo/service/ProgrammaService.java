package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Programma;
import com.example.demo.repository.ProgrammaRepository;

@Service
public class ProgrammaService {

	@Autowired
	private ProgrammaRepository programmaRepository;

	public List<Programma> getProgrammazione() {
		return programmaRepository.findAll();
	}

	public void eliminaProgramma(long id) {
		Programma programma = programmaRepository.getReferenceById(id);
		programmaRepository.delete(programma);
	}

	public Programma modificaProgramma(long id, Programma programma) {
		Programma p = programmaRepository.getReferenceById(id);
		p.setTitolo(programma.getTitolo());
		p.setDescrizione(programma.getDescrizione());
		p.setOrario_inizio(programma.getOrario_inizio());
		p.setOrario_fine(programma.getOrario_fine());
		programmaRepository.save(p);
		return p;
	}

	public Programma inserisciProgramma(Programma programma) {
		return programmaRepository.save(programma);
	}


}
