package com.example.istoki_diary.exception;
import lombok.Data;

@Data
public class CustomException extends RuntimeException{
    private String errorCode;

    public CustomException(String errorCode, String message){
        super(message);
        this.errorCode = errorCode;
    }
}
