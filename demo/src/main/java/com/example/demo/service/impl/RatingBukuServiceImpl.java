package com.example.demo.service.impl;


import com.example.demo.entity.Buku;
import com.example.demo.entity.RatingBuku;
import com.example.demo.repository.BukuRepository;
import com.example.demo.repository.RatingBukuRepository;
import com.example.demo.service.RatingBukuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RatingBukuServiceImpl implements RatingBukuService {

    @Autowired
    private RatingBukuRepository ratingBukuRepository;

    @Autowired
    private BukuRepository bukuRepository; // Gantilah dengan repository Buku yang sesuai di proyek Anda

    @Override
    public List<RatingBuku> getAllRatingBuku() {
        return ratingBukuRepository.findAll();
    }

    @Override
    public RatingBuku getRatingBukuById(Long id) {
        return ratingBukuRepository.findById(id).orElse(null);
    }

    @Override
    public RatingBuku saveRatingBuku(RatingBuku ratingBuku) {
        RatingBuku savedRating = ratingBukuRepository.save(ratingBuku);

        // Update totalRating dan jumlahPenggunaRating di entitas Buku
        Buku buku = savedRating.getBuku();
        buku.tambahRating(savedRating.getRating());
        bukuRepository.save(buku);  // Pastikan Anda menyimpan perubahan pada entitas Buku

        return savedRating;
    }

    @Override
    public RatingBuku updateRatingBuku(Long id, RatingBuku ratingBuku) {
        Optional<RatingBuku> existingRatingBuku = ratingBukuRepository.findById(id);

        if (existingRatingBuku.isPresent()) {
            RatingBuku updatedRatingBuku = existingRatingBuku.get();
            updatedRatingBuku.setBuku(ratingBuku.getBuku());
            updatedRatingBuku.setPengguna(ratingBuku.getPengguna());
            updatedRatingBuku.setRating(ratingBuku.getRating());
            updatedRatingBuku.setKomentar(ratingBuku.getKomentar());

            return ratingBukuRepository.save(updatedRatingBuku);
        } else {
            return null; // RatingBuku not found
        }
    }

    @Override
    public void deleteRatingBuku(Long id) {
        ratingBukuRepository.deleteById(id);
    }
}