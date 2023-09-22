package com.skcet.content.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;
import com.skcet.content.model.ContentModel;
import com.skcet.content.repository.ContentRepository;
import com.skcet.content.service.ContentService;

@CrossOrigin
@RestController
public class ContentController {
	@Autowired
	ContentService stuService;
	ContentRepository cr;
	@PostMapping("/post")
	public ContentModel addinfo(@RequestBody ContentModel st) {
		return stuService.saveDetails(st);
	}
	@GetMapping("/showDetails")
	public List<ContentModel> fetchDetails()
	{
		return stuService.getDetails();
	}
	@PutMapping("/updateDetails")
	public ContentModel updateInfo(@RequestBody ContentModel st1)
	{
		return stuService.updateDetails(st1);
	}
	
	
	@DeleteMapping("/deleteDetails/{id}")
	public String deleteInfo(@PathVariable("id") int id) {
		stuService.deleteDetails(id);
		
		return "Details is Deleted";
		//return stuService.getDetails();
	}
	//sorting
		@GetMapping("/product/{field}")
		public List<ContentModel> getWithSort(@PathVariable String field) {
			return stuService.getSorted(field);
		}

		// pagination
		@GetMapping("/product/{offset}/{pageSize}")
		public List<ContentModel> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
			return stuService.getWithPagination(offset, pageSize);
		}
		
		@GetMapping("/users/{userId}")
		public ResponseEntity<?>getUserId(@PathVariable int userId)
		{
		Optional<ContentModel>book=stuService.getUserId(userId);
		if(book!=null) {
			return ResponseEntity.ok(book); 
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ID NOT FOUND");
		}
			
}
