package com.example.demo.service;


import com.example.demo.entity.RatingBuku;

import java.util.List;

public interface RatingBukuService {

    List<RatingBuku> getAllRatingBuku();

    RatingBuku getRatingBukuById(Long id);

    RatingBuku saveRatingBuku(RatingBuku ratingBuku);

    RatingBuku updateRatingBuku(Long id, RatingBuku ratingBuku);

    void deleteRatingBuku(Long id);
}
