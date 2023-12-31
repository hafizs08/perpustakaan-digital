package com.example.demo.service.impl;


import com.example.demo.entity.Buku;
import com.example.demo.repository.BukuRepository;
import com.example.demo.service.BukuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BukuServiceImpl implements BukuService {

    @Autowired
    private BukuRepository bukuRepository;

    @Override
    public List<Buku> getAllBuku() {
        return bukuRepository.findAll();
    }

    @Override
    public Buku getBukuById(Long id) {
        return bukuRepository.findById(id).orElse(null);
    }

    @Override
    public Buku saveBuku(Buku buku) {
        return bukuRepository.save(buku);
    }

    @Override
    public Buku updateBuku(Long id, Buku buku) {
        Optional<Buku> existingBuku = bukuRepository.findById(id);

        if (existingBuku.isPresent()) {
            Buku updatedBuku = existingBuku.get();
            updatedBuku.setJudul(buku.getJudul());
            updatedBuku.setGambar(buku.getGambar());
            updatedBuku.setPenulis(buku.getPenulis());
            updatedBuku.setTahun_terbit(buku.getTahun_terbit());
            updatedBuku.setIsbn(buku.getIsbn());
            updatedBuku.setJumlah_buku(buku.getJumlah_buku());

            return bukuRepository.save(updatedBuku);
        } else {
            return null; // Buku not found
        }
    }

    @Override
    public void deleteBuku(Long id) {
        bukuRepository.deleteById(id);
    }
}

