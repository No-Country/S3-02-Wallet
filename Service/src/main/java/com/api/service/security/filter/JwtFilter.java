package com.api.service.security.filter;

import com.api.service.security.service.UserDetailsImpl;
import com.api.service.security.jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {


   private UserDetailsImpl userDetails;
   private JwtUtil jwtUtil;

   @Override
   protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

      String authorization = request.getHeader(HttpHeaders.AUTHORIZATION);
      String jwt = null, email = null;

      try {

         if (authorization != null && authorization.startsWith("Bearer")) {
            jwt = authorization.substring(7);
            email = jwtUtil.extractUsername(jwt);
         }

         if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails user = userDetails.loadUserByUsername(email);

            if (jwtUtil.validateToken(jwt, user)) {
               UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                  user, user.getPassword(), user.getAuthorities()
               );

               authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

               SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
         }
      } catch (Exception e) {
         throw new BadCredentialsException(e.getLocalizedMessage());
      }

      filterChain.doFilter(request, response);
   }
}
