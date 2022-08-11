package com.api.service.models.mappers;

import com.api.service.models.entities.Client;
import com.api.service.models.request.RegisterRequest;
import com.api.service.security.jwt.Role;
import org.springframework.stereotype.Component;

import static com.api.service.security.jwt.Role.*;

@Component
public class ClientMapper {

   public Client requestToEntity(RegisterRequest request) {
      return Client.builder()
         .email(request.getEmail())
         .lastName(request.getLastName())
         .name(request.getName())
         .role(ROLE_USER)
         .build();
   }
}
