package com.api.service.config;

import com.api.service.security.filter.JwtFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.http.HttpMethod.POST;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

   private final UserDetailsService userDetailsService;
   private final JwtFilter jwtFilter;

   @Bean
   public PasswordEncoder encoder() { return new BCryptPasswordEncoder(10); }

   @Bean
   @Override
   public AuthenticationManager authenticationManagerBean() throws Exception {
      return super.authenticationManagerBean();
   }


   @Override
   protected void configure(AuthenticationManagerBuilder auth) {
      auth.authenticationProvider(provider());
   }

   private DaoAuthenticationProvider provider() {
      DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
      provider.setUserDetailsService(userDetailsService);
      provider.setPasswordEncoder(encoder());
      return provider;
   }

   @Override
   protected void configure(HttpSecurity http) throws Exception {
      http.csrf().disable()
         .authorizeRequests()
         .antMatchers(POST, "/v1/auth/**").permitAll()
         .antMatchers(POST, "/v1/client/register").permitAll()
         .anyRequest().authenticated();

      http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
         .exceptionHandling()
         .authenticationEntryPoint(new Http403ForbiddenEntryPoint());
   }
}
