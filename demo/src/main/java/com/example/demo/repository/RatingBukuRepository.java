package com.example.demo.repository;

import com.example.demo.entity.RatingBuku;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingBukuRepository extends JpaRepository<RatingBuku, Long> {
    // Jika Anda memerlukan query tambahan, Anda dapat menambahkannya di sini
}