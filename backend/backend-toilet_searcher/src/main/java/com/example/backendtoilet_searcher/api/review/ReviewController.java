package com.example.backendtoilet_searcher.api.review;

import com.example.backendtoilet_searcher.domain.review.Review;
import com.example.backendtoilet_searcher.domain.review.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class ReviewController {
    private final ReviewService reviewService;

    @GetMapping()
    public List<Review> getReviews(){
        return reviewService.getReviews();
    }

    @PostMapping()
    public Review createReview(@RequestBody ReviewRequestDTO request){
        return reviewService.insertReview(request);
    }

    @DeleteMapping()
    public void deleteReviews(){
        reviewService.deleteReviews();
    }

}
