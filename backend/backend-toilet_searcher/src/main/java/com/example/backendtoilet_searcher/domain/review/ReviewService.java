package com.example.backendtoilet_searcher.domain.review;

import com.example.backendtoilet_searcher.api.review.dto.ReviewRequest;
import com.example.backendtoilet_searcher.domain.toilet.Toilet;
import com.example.backendtoilet_searcher.domain.toilet.ToiletService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private ReviewRepository reviewRepository;
    private ToiletService toiletService;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository, ToiletService toiletService) {
        this.reviewRepository = reviewRepository;
        this.toiletService = toiletService;
    }

    public List<Review> getReviews(){
        return this.reviewRepository.findAll();
    }

    public Review insertReview(ReviewRequest reviewRequest){
        Toilet toilet = this.toiletService.findToiletById(reviewRequest.getToiletId());
        Review review = Review.builder()
                .toilet(toilet)
                .user(reviewRequest.getUsername())
                .date(LocalDateTime.now())
                .description(reviewRequest.getDescription())
                .build();

        return this.reviewRepository.insert(review);
    }


}
