package com.skcet.content.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Content_Model")
public class ContentModel {
	@Id
	private int id;
	private String c_name;
	@Column(name="book_name")
	private String book_name;
	private String author;
	private String domain;
	private String university;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getC_name() {
		return c_name;
	}
	public void setC_name(String c_name) {
		this.c_name = c_name;
	}
	public String getBook_name() {
		return book_name;
	}
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getDomain() {
		return domain;
	}
	public void setDomain(String domain) {
		this.domain = domain;
	}
	
	public String getUniversity() {
		return university;
	}
	public void setUniversity(String university) {
		this.university = university;
	}
	@Override
	public String toString() {
		return "id=" + id + "c_name=" + c_name  + "book_name=" + book_name +
				"author=" + author + "domain=" + domain + 
				"university="+ university + "domain=" + domain;
	}
	
	
	public ContentModel() {
		
	}
	
}
