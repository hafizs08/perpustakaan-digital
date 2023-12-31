package com.example.demo.repository;

import com.example.demo.entity.Peminjaman;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PeminjamanRepository extends JpaRepository<Peminjaman, Long> {
    // Jika Anda memerlukan query tambahan, Anda dapat menambahkannya di sini
}
