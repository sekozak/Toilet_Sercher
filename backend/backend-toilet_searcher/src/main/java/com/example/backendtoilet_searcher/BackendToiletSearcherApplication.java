package com.example.backendtoilet_searcher;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
@SpringBootApplication
public class BackendToiletSearcherApplication{

    public static void main(String[] args) {
        SpringApplication.run(BackendToiletSearcherApplication.class, args);
    }
}
