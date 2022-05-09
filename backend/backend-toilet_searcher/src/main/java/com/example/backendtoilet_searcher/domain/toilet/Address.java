package com.example.backendtoilet_searcher.domain.toilet;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Address {

    private String street;
    private String city;

}
