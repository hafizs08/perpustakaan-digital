package com.example.demo.controller;


import com.example.demo.entity.RatingBuku;
import com.example.demo.service.RatingBukuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rating_buku")
public class RatingBukuController {

    @Autowired
    private RatingBukuService ratingBukuService;

    @GetMapping
    public List<RatingBuku> getAllRatingBuku() {
        return ratingBukuService.getAllRatingBuku();
    }

    @GetMapping("/{id}")
    public RatingBuku getRatingBukuById(@PathVariable Long id) {
        return ratingBukuService.getRatingBukuById(id);
    }

    @PostMapping
    public RatingBuku saveRatingBuku(@RequestBody RatingBuku ratingBuku) {
        return ratingBukuService.saveRatingBuku(ratingBuku);
    }

    @PutMapping("/{id}")
    public RatingBuku updateRatingBuku(@PathVariable Long id, @RequestBody RatingBuku ratingBuku) {
        return ratingBukuService.updateRatingBuku(id, ratingBuku);
    }

    @DeleteMapping("/{id}")
    public void deleteRatingBuku(@PathVariable Long id) {
        ratingBukuService.deleteRatingBuku(id);
    }
}
