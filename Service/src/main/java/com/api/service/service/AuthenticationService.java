package com.api.service.service;

import com.api.service.models.request.LoginRequest;

public interface AuthenticationService {

   String login(LoginRequest request);

   String refresh(String token);
}
