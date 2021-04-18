package com.back_end.musical_project.domain.user;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data   // lombok관련 anotation / setter, getter 자동으로 생성해준다
@Entity // database에 해당 class의 table을 생성해준다
public class User {
	@Id // 기본키 설정 / 해당 필드가 table의 pk 
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 해당 데이터베이스 번호증가 전략을 따라가기
	private int id;
	
	@Column(unique = true, nullable = false)
	private String username;
	
	@Column(nullable = false)
	private String password;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private String email;
	
	private String role; // 권한
}
