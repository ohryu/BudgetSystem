package com.talentnet.bugetsystem.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.talentnet.bugetsystem.Entity.HistoricalAmount;

@Repository
public interface HistoricalAmountRepo extends JpaRepository<HistoricalAmount, Integer>{
	@Query(value="select BL_CODE from BHISAMOUNT where COMPANYID= ? group by BL_CODE", nativeQuery = true)
	public List<String> findBL(int companyid);
	
	public List<HistoricalAmount> findByCompanyid(int companyid);
	public HistoricalAmount findByBlcodeAndSponsor(String code, String sponsor);
	
	@Transactional
	void removeByCompanyid(int companyid);
}
