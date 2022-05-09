package com.example.backendtoilet_searcher.domain.coordinates;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class Coordinates {
    private BigDecimal lat;
    private BigDecimal lng;
}
