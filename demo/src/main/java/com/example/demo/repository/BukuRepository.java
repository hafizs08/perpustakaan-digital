package com.example.demo.repository;

import com.example.demo.entity.Buku;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BukuRepository extends JpaRepository<Buku, Long> {
    // Jika Anda memerlukan query tambahan, Anda dapat menambahkannya di sini
}
