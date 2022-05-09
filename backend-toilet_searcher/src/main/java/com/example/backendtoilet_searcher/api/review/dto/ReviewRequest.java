package com.example.backendtoilet_searcher.api.review.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Builder
@Data
public class ReviewRequest {

    private String toiletId;
    private String username;
    private String description;
}
