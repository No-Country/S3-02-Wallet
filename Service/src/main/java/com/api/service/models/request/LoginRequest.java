package com.api.service.models.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Data
public class LoginRequest {

   @NotNull
   @Email
   private String email;

   @NotNull
   private String password;
}
