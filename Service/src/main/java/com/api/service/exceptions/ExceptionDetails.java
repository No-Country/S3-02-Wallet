package com.api.service.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@Getter @Setter
@NoArgsConstructor
public class ExceptionDetails {

   private static LocalDateTime localDateTime = LocalDateTime.now();
   private String message;
   private String path;

   public ExceptionDetails(Exception exception, HttpServletRequest request) {
      message = exception.getMessage();
      path = request.getRequestURI();
   }
}
