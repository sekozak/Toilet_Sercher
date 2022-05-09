package com.example.backendtoilet_searcher.domain.review;


import com.example.backendtoilet_searcher.domain.toilet.Toilet;
import lombok.Builder;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@Builder
@Document("review")
public class Review {

    @Id
    private String id;

    @DocumentReference
    private Toilet toilet;
    private String user;
    private String description;
    private LocalDateTime date;
}
