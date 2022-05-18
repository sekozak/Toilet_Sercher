package com.example.backendtoilet_searcher.domain.toilet;


import com.example.backendtoilet_searcher.domain.coordinates.Coordinates;
import com.example.backendtoilet_searcher.domain.review.Review;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;

@Data
@Builder
@Document("toilet")
public class Toilet {

    @Id
    private String id;
    private String name;
    private Coordinates coordinates;
    private Address address;
    private String description;
    private List<Review> reviews;
    private Boolean paid;

    public void addReviewToToilet(Review review){
        this.reviews.add(review);
    }
}
