package com.example.backendtoilet_searcher.api.toilet;

import com.example.backendtoilet_searcher.api.review.ReviewRequestDTO;
import com.example.backendtoilet_searcher.common.exception.AlreadyExistsException;
import com.example.backendtoilet_searcher.common.exception.NotFoundException;
import com.example.backendtoilet_searcher.domain.review.Review;
import com.example.backendtoilet_searcher.domain.toilet.Toilet;
import com.example.backendtoilet_searcher.domain.toilet.ToiletService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.concurrent.Future;

@RestController
@RequestMapping("/toilets")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class ToiletController {
    private final ToiletService toiletService;

    @GetMapping("/{id}")
    public Toilet getToiletById(@PathVariable("id") String id){
        try {
            return this.toiletService.findToiletById(id);
        } catch (NotFoundException ex){
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "Toilet not found",
                    ex
            );
        }
    }

    @GetMapping()
    public List<Toilet> getToilets(){
        return toiletService.findAllToilets();
    }

    @GetMapping("/{id}/reviews")
    public List<Review> getReviews(@PathVariable("id") String id){
        try {
            return this.toiletService.getToiletReviews(id);
        } catch (NotFoundException ex){
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "Toilet not found",
                    ex
            );
        }
    }

    @PostMapping()
    public Toilet createToilet(@RequestBody ToiletRequestDTO request){
        System.out.println("Toilet req sent!");
        try{
            return toiletService.insertToilet(request);
        } catch(AlreadyExistsException exception){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Toilet already exist",
                    exception
            );
        }
    }
    @PostMapping("/{id}/reviews")
    public Future<Toilet> createReview(@PathVariable("id") String id, @RequestBody ReviewRequestDTO request){
        return this.toiletService.insertReview(id,request).toFuture();
    }

    @DeleteMapping("/{id}")
    public void deleteToilet(@PathVariable("id") String id){
        this.toiletService.deleteToilet(id);
    }

    @DeleteMapping()
    public void deleteToilet(){
        this.toiletService.deleteAllToilets();
    }
}
