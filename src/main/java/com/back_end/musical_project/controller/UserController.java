package com.back_end.musical_project.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.back_end.musical_project.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserController {
	private final UserRepository userRepository;

	// id 중복체크
	@GetMapping("/idCheck/{loginid}")
	public ResponseEntity<?> idCheck(@PathVariable String loginid) {

		int n = userRepository.countByUsername(loginid);
		if (n == 0) {
			return new ResponseEntity<String>("ok", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("사용불가아이디", HttpStatus.OK);
		}
	}
}
