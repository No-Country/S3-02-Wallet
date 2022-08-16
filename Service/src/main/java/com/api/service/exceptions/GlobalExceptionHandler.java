package com.api.service.exceptions;

import com.api.service.exceptions.customs.ResourceExistsException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

   @ResponseStatus(HttpStatus.CONFLICT)
   @ExceptionHandler({
      ResourceExistsException.class
   })
   @ResponseBody
   public ExceptionDetails conflictHandler(Exception exception, HttpServletRequest request) {
      return new ExceptionDetails(exception, request);
   }
}
