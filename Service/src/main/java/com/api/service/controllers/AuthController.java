package com.api.service.controllers;

import com.api.service.models.request.LoginRequest;
import com.api.service.models.request.RegisterRequest;
import com.api.service.service.AuthenticationService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
public class AuthController {

   private final AuthenticationService service;

   @PostMapping("/login")
   public ResponseEntity<String> login(@RequestBody @Valid LoginRequest request) {
      return ResponseEntity.ok(service.login(request));
   }

   @PostMapping("/refresh")
   public ResponseEntity<String> register(@RequestHeader(name = "Authorization") String authorization) {
      return ResponseEntity.ok(service.refresh(authorization));
   }
}
