package com.example.backendtoilet_searcher.domain.toilet;

import com.example.backendtoilet_searcher.api.review.ReviewRequestDTO;
import com.example.backendtoilet_searcher.api.toilet.ToiletRequestDTO;
import com.example.backendtoilet_searcher.common.exception.AlreadyExistsException;
import com.example.backendtoilet_searcher.common.exception.NotFoundException;
import com.example.backendtoilet_searcher.domain.review.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.mongodb.util.BsonUtils;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import reactor.core.publisher.Mono;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.ignoreCase;

@Service
@RequiredArgsConstructor
public class ToiletService{
    private final ToiletRepository toiletRepository;

    private final ReactiveToiletRepository reactiveToiletRepository;

    public List<Toilet> findAllToilets(){
            return toiletRepository.findAll();
    }

    public Toilet findToiletById(String toiletId){
        return toiletRepository.findById(toiletId)
                .orElseThrow(() -> new NotFoundException("toilet not found"));
    }

    public List<Review> getToiletReviews(String id){
        return this.toiletRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("toilet not found"))
                .getReviews();
    }

    public Toilet insertToilet(ToiletRequestDTO toiletRequestDTO){

        Toilet toilet = Toilet.builder()
                .name(toiletRequestDTO.getName())
                .coordinates(toiletRequestDTO.getCoordinates())
                .address(toiletRequestDTO.getAddress())
                .description(toiletRequestDTO.getDescription())
                .reviews(new ArrayList<>())
                .paid(toiletRequestDTO.getPaid())
                .build();


        Boolean exists = this.toiletRepository.existsToiletByName(toiletRequestDTO.getName());

        if(exists){
            System.out.println("toilet already exists");
            throw new AlreadyExistsException("toilet already exists");
        }else{
            return this.toiletRepository.insert(toilet);
        }
    }

    public Mono<Toilet> insertReview(String id, ReviewRequestDTO reviewRequest){
        Review review = Review.builder()
                .user(reviewRequest.getUsername())
                .date(LocalDateTime.now())
                .description(reviewRequest.getDescription())
                .build();

        return this.reactiveToiletRepository
                .findById(id)
                .map(toilet -> {
                    toilet.addReviewToToilet(review);
                    return toilet;
                })
                .flatMap(this.reactiveToiletRepository::save);
    }

    public void deleteToilet(String id){
        this.toiletRepository.deleteById(id);
    }

    public void deleteAllToilets(){
        this.toiletRepository.deleteAll();
    }

    public Toilet updateToilet(ToiletRequestDTO req, String id){
        Toilet toilet = this.toiletRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("Toilet not found"));

        if(req.getName() != null){
            toilet.setName(req.getName());
        }
        if (req.getDescription() != null){
            toilet.setDescription(req.getDescription());
        }
        if(req.getAddress() != null){
            toilet.setAddress(req.getAddress());
        }
        if(req.getPaid() != null){
            toilet.setPaid(req.getPaid());
        }

        return this.toiletRepository.save(toilet);
    }
}
