package com.example.istoki_diary.handler;

import com.example.istoki_diary.dto.error.CustomExceptionDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.resource.NoResourceFoundException;
import com.example.istoki_diary.exception.CustomException;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<CustomExceptionDTO> handleCustomException(CustomException ex) {
        CustomExceptionDTO error = new CustomExceptionDTO(ex.getErrorCode(), ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<CustomExceptionDTO> handleException(Exception ex) throws Exception {
        if (ex instanceof NoResourceFoundException) {
            throw ex;
        }
        CustomExceptionDTO error = new CustomExceptionDTO("GENERAL_ERROR", "An unexpected error occurred.");
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
