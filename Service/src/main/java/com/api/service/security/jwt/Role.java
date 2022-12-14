package com.api.service.security.jwt;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {

   ROLE_USER;

   @Override
   public String getAuthority() {
      return name();
   }
}
