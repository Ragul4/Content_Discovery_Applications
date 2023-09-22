package com.skcet.content.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skcet.content.model.User;
import com.skcet.content.repository.UserRepository;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        // Add any additional validation or business logic here
        return userRepository.save(user);
    }
}
