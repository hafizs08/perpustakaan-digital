package com.example.demo.service;

import com.example.demo.entity.Buku;

import java.util.List;

public interface BukuService {

    List<Buku> getAllBuku();

    Buku getBukuById(Long id);

    Buku saveBuku(Buku buku);

    Buku updateBuku(Long id, Buku buku);

    void deleteBuku(Long id);

    
}