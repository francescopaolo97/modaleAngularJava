package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Programma;

@Repository
public interface ProgrammaRepository extends JpaRepository<Programma, Long>{

}
