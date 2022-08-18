package com.api.service.service.impl;

import com.api.service.models.request.LoginRequest;
import com.api.service.repository.ClientRepository;
import com.api.service.security.jwt.JwtUtil;
import com.api.service.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

   private final ClientRepository repository;
   private final AuthenticationManager auth;
   private final UserDetailsService userService;
   private final JwtUtil jwtUtil;


   public String login(LoginRequest request) {
      String email = request.getEmail(), password = request.getPassword();

      Authentication authentication = auth.authenticate(new UsernamePasswordAuthenticationToken(email, password));
      SecurityContextHolder.getContext().setAuthentication(authentication);
      UserDetails user = (UserDetails) authentication.getPrincipal();

      return jwtUtil.generateToken(user);
   }

   @Override
   public String refresh(String token) {
      String email = jwtUtil.extractUsername(token);
      UserDetails user = userService.loadUserByUsername(email);
      return jwtUtil.generateToken(user);
   }


}
