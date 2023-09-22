package com.skcet.content.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skcet.content.model.ContentModel;

public interface ContentRepository extends JpaRepository<ContentModel, Integer>{
}
