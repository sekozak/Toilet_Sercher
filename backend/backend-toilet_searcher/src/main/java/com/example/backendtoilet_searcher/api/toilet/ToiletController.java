package com.example.backendtoilet_searcher.api.toilet;

import com.example.backendtoilet_searcher.common.exception.AlreadyExistsException;
import com.example.backendtoilet_searcher.domain.toilet.Toilet;
import com.example.backendtoilet_searcher.domain.toilet.ToiletRepository;
import com.example.backendtoilet_searcher.domain.toilet.ToiletService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/toilets")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
public class ToiletController {
    private final ToiletService toiletService;

    @GetMapping()
    public List<Toilet> getToilets(){
        return toiletService.findAllToilets();
    }

    @PostMapping()
    public Toilet createToilet(@RequestBody ToiletRequestDTO request){

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
}
