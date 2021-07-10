package com.back_end.musical_project.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.back_end.musical_project.domain.musical.Musical;
import com.back_end.musical_project.domain.musical.MusicalRepository;
import com.back_end.musical_project.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MusicalController {
	private final MusicalRepository musicalRepository;
	
	// id 중복체크
	@GetMapping("/musicalAll")
	public ResponseEntity<?> MusicalAll() {
		List<Musical> musical = musicalRepository.findAll();
		return new ResponseEntity<List<Musical>>(musical, HttpStatus.OK);
	}
	@GetMapping("/musicalSearch/{id}")
	public ResponseEntity<?> MusicalSearch(@PathVariable int id) {
		Musical musical = musicalRepository.findById(id).get();
		return new ResponseEntity<Musical>(musical, HttpStatus.OK);
		
	}
	
}





