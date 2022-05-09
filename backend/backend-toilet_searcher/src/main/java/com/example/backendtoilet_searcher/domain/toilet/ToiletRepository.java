package com.example.backendtoilet_searcher.domain.toilet;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
public interface ToiletRepository extends MongoRepository<Toilet, String> {
}
