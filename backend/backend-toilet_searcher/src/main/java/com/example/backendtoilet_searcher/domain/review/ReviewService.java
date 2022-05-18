package com.example.backendtoilet_searcher.domain.review;

import com.example.backendtoilet_searcher.api.review.ReviewRequestDTO;
import com.example.backendtoilet_searcher.domain.toilet.Toilet;
import com.example.backendtoilet_searcher.domain.toilet.ToiletService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final ToiletService toiletService;

    public List<Review> getReviews(){
        return this.reviewRepository.findAll();
    }

    public Review insertReview(ReviewRequestDTO reviewRequest){
        Toilet toilet = this.toiletService.findToiletById(reviewRequest.getToiletId());
        Review review = Review.builder()
                .toilet(toilet)
                .user(reviewRequest.getUsername())
                .date(LocalDateTime.now())
                .description(reviewRequest.getDescription())
                .build();

        return reviewRepository.insert(review);
    }

    public void deleteReviews(){
        this.reviewRepository.deleteAll();
    }

    // TODO
    public List<Review> getReviewsByToiletId(String toiletId) {
        return new ArrayList<>();
    }
}
