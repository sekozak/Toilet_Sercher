package com.example.backendtoilet_searcher.domain.toilet;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface ReactiveToiletRepository extends ReactiveMongoRepository<Toilet, String> {
}
