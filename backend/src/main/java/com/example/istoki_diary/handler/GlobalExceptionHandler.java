package com.example.istoki_diary.handler;

import com.example.istoki_diary.dto.error.CustomErrorDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ErrorHandler {
    @ExceptionHandler(CustomErrorDTO.class)
    public ResponseEntity<ErrorResponse> handleCustomError(CustomErrorDTO ex) {
        ErrorResponse error = new ErrorResponse(ex.getStatus(), HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}
