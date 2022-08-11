package com.api.service.models.request;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.validation.constraints.Email;

@Data
public class RegisterRequest {

   private String name;
   private String lastName;

   @NotNull
   @Email
   private String email;
   @NotNull
   private String password;
}
