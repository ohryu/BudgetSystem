package com.talentnet.bugetsystem.DTO;

import java.sql.Date;
import java.util.List;

public class BudgetDTO {
	private String id;
	private int cdept;
	private int sdept;
	private int bline;
	private String wb;
	private String bg;
	private Long amount;
	private int allocate;
	private Date start;
	private Long expense;
	private String role;
	private List<List<String>> moredetail;
	
	
	public List<List<String>> getMoredetail() {
		return moredetail;
	}
	public void setMoredetail(List<List<String>> moredetail) {
		this.moredetail = moredetail;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getCdept() {
		return cdept;
	}
	public void setCdept(int cdept) {
		this.cdept = cdept;
	}
	public int getSdept() {
		return sdept;
	}
	public void setSdept(int sdept) {
		this.sdept = sdept;
	}
	public int getBline() {
		return bline;
	}
	public void setBline(int bline) {
		this.bline = bline;
	}
	public String getWb() {
		return wb;
	}
	public void setWb(String wb) {
		this.wb = wb;
	}
	public String getBg() {
		return bg;
	}
	public void setBg(String bg) {
		this.bg = bg;
	}
	public Long getAmount() {
		return amount;
	}
	public void setAmount(Long amount) {
		this.amount = amount;
	}
	public int getAllocate() {
		return allocate;
	}
	public void setAllocate(int allocate) {
		this.allocate = allocate;
	}
	public Date getStart() {
		return start;
	}
	public void setStart(Date start) {
		this.start = start;
	}
	public Long getExpense() {
		return expense;
	}
	public void setExpense(Long expense) {
		this.expense = expense;
	}
	
	
}
