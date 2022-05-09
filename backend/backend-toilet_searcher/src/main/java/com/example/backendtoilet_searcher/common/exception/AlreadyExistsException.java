package com.example.backendtoilet_searcher.common.exception;

public class AlreadyExistsException extends RuntimeException{

    public AlreadyExistsException(String message) {
        super(message);
    }
}
