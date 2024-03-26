package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Programma;
import com.example.demo.service.ProgrammaService;

@CrossOrigin
@RestController
@RequestMapping("/api/programma")
public class ProgrammaController {

	@Autowired
	private ProgrammaService programmaService;
	
	@GetMapping("/getProgrammazione")
	public List<Programma> getProgrammazione(){
		return programmaService.getProgrammazione();
	}
	
	@DeleteMapping("/eliminaProgramma")
	public void eliminaProgramma(@RequestParam long id) {
		programmaService.eliminaProgramma(id);
	}
	
	@PutMapping("/modificaProgramma")
	public Programma modificaProgramma(@RequestParam long id, @RequestBody Programma programma) {
		return programmaService.modificaProgramma(id, programma);
	}
	
	@PostMapping("/inserisciProgramma")
	public Programma inserisciProgramma(@RequestBody Programma programma) {
		return programmaService.inserisciProgramma(programma);
	}
}
