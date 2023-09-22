package com.skcet.content.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.skcet.content.model.ContentModel;
import com.skcet.content.repository.ContentRepository;







@Service
public class ContentService {
	@Autowired

	ContentRepository stRepo;
	
	public ContentModel saveDetails(ContentModel  e)
	{
		return stRepo.save(e);
	}
	public List<ContentModel > getDetails()
	{
		return stRepo.findAll();
	}
	public ContentModel  updateDetails(ContentModel  e1)
	{
		return stRepo.saveAndFlush(e1);
	}
	
	
	public void deleteDetails(int Id)
	{
		stRepo.deleteById(Id);
	}
	
	
	public List<ContentModel> getSorted(String field) {
		return stRepo.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	
	public List<ContentModel> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<ContentModel> page =stRepo.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}
	
	public Optional<ContentModel> getUserId(int userId)
	   {
		   Optional<ContentModel>book=stRepo.findById(userId);
		   if(book.isPresent())
		   {
			   return book;
		   }
		   return null;
	   }

	
}
