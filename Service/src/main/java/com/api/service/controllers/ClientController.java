package com.api.service.controllers;

import com.api.service.models.request.RegisterRequest;
import com.api.service.service.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1/client")
@RequiredArgsConstructor
public class ClientController {

   private final ClientService service;

   @PostMapping("/register")
   public ResponseEntity<Void> register(@RequestBody @Valid RegisterRequest request) {
      service.register(request);
      return ResponseEntity.status(HttpStatus.CREATED).build();
   }
}
