package com.talentnet.bugetsystem.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.talentnet.bugetsystem.Entity.Bg;
import com.talentnet.bugetsystem.Entity.Budget;
import com.talentnet.bugetsystem.Entity.BudgetDetail;
import com.talentnet.bugetsystem.Entity.BudgetLine;
import com.talentnet.bugetsystem.Entity.Dept;

@Repository
public interface BudgetDetailRepo extends JpaRepository<BudgetDetail, Integer>{
	List<BudgetDetail> findByBudget(Budget budget);
	List<BudgetDetail> findByDept(Dept dept);
	List<BudgetDetail> findAllByOrderByBudgetDesc();
	BudgetDetail findByBdid(Integer id);
	
	@Transactional
	void removeByBline(BudgetLine bline);
	@Transactional
	void removeByBg(Bg bg);
	
	public List<BudgetDetail> findByBudgetInOrderByBgAsc(List<Budget> budget);
	
	@Query(value = "SELECT sum(b.amount), b.bline, b.dept FROM BudgetDetail b WHERE b.budget IN :bgs GROUP BY b.bline, b.dept")
	public List<BudgetDetail> getdatagroupby(List<Budget> bgs);
}
