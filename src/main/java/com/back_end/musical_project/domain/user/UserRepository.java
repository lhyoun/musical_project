package com.back_end.musical_project.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	int countByUsername(String loginid);	//count = 결과 레코드수 반환
	
}