package com.example.backendtoilet_searcher.api.review;


import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ReviewRequestDTO {

    private String toiletId;
    private String username;
    private String description;
}
