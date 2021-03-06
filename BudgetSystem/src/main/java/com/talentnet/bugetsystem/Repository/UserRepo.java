package com.talentnet.bugetsystem.Repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentnet.bugetsystem.Entity.BUser;


@Repository
public interface UserRepo extends JpaRepository<BUser, Integer>{
	BUser findByUsername(String username);
	BUser findByUserid(Integer id);
	
	@Transactional
	void removeByUserid(Integer id);
}
