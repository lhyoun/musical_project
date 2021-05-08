package com.back_end.musical_project.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	int countByLoginid(String loginid);	//count = 결과 레코드수 반환

	User findByLoginidAndPassword(String loginid, String password);
	
	
}