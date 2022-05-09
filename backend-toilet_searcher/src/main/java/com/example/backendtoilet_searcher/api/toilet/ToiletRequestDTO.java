package com.example.backendtoilet_searcher.api.toilet;

import com.example.backendtoilet_searcher.domain.coordinates.Coordinates;
import com.example.backendtoilet_searcher.domain.toilet.Address;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ToiletRequestDTO {
    private String name;
    private Coordinates coordinates;
    private Address address;
    private String description;
}
