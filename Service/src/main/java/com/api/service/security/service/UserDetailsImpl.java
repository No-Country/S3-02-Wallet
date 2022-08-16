package com.api.service.security.service;

import com.api.service.models.entities.Client;
import com.api.service.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailsImpl implements UserDetailsService {

   private final ClientRepository repository;

   @Override
   public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

      Client client = Optional
         .ofNullable(repository.findByEmail(username))
         .orElseThrow(() -> new UsernameNotFoundException("Cliente not found with the email " + username));

      return User.withUsername(username)
         .password(client.getPassword())
         .authorities(client.getRole())
         .accountExpired(false)
         .accountLocked(false)
         .credentialsExpired(false)
         .disabled(false)
         .build();
   }

}
