package com.example.backendtoilet_searcher.domain.review;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface ReviewRepository extends MongoRepository<Review, String> {

}
