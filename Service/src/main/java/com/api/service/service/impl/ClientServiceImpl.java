package com.api.service.service.impl;

import com.api.service.exceptions.customs.ResourceExistsException;
import com.api.service.models.entities.Client;
import com.api.service.models.mappers.ClientMapper;
import com.api.service.models.request.RegisterRequest;
import com.api.service.repository.ClientRepository;
import com.api.service.service.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements ClientService {

   private final ClientMapper mapper;
   private final PasswordEncoder encoder;
   private final ClientRepository repository;

   public void register(RegisterRequest request) {
      checkIfEmailExists(request.getEmail());

      Client client = mapper.requestToEntity(request);
      String password = encoder.encode(request.getPassword());
      client.setPassword(password);

      repository.save(client);
   }

   private void checkIfEmailExists(String email) {
      if(repository.existsByEmail(email))
         throw new ResourceExistsException("Email " + email + " is already registered");
   }


}
