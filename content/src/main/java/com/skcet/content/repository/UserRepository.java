package com.skcet.content.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skcet.content.model.User;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
} 