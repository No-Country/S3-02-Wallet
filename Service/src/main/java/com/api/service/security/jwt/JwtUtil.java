package com.api.service.security.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class JwtUtil {

   @Value("${jwt.secrete.key}")
   private String key;

   private Claims extractClaims(String token) {
      return Jwts.parser().setSigningKey(key).parseClaimsJwt(token).getBody();
   }

   private <T> T extractClaim(String token, Function<Claims, T> resolve) {
      Claims claims = extractClaims(token);
      return resolve.apply(claims);
   }

   public String extractUsername(String token) {
      return extractClaim(token, Claims::getSubject);
   }

   public Date extractExpiration(String token) {
      return extractClaim(token, Claims::getExpiration);
   }

   public Boolean isTokenExpired(String token) {
      return extractExpiration(token).before(new Date());
   }

   public Boolean validateToken(String token, UserDetails user) {
      String email = extractUsername(token);
      return email.equals(user.getUsername()) && !isTokenExpired(token);
   }

   public String generateToken(UserDetails userDetails) {
      int expiration = 700000;
      return Jwts.builder()
         .claim("ROLE", userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
         .setSubject(userDetails.getUsername())
         .setIssuedAt(new Date(System.currentTimeMillis()))
         .setExpiration(new Date(System.currentTimeMillis() + expiration))
         .signWith(SignatureAlgorithm.HS256, key)
         .compact();
   }
}
