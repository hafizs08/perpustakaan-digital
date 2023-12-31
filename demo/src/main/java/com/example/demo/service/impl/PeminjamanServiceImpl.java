package com.example.demo.service.impl;

import com.example.demo.entity.Peminjaman;
import com.example.demo.repository.PeminjamanRepository;
import com.example.demo.service.PeminjamanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PeminjamanServiceImpl implements PeminjamanService {

    @Autowired
    private PeminjamanRepository peminjamanRepository;

    @Override
    public List<Peminjaman> getAllPeminjaman() {
        return peminjamanRepository.findAll();
    }

    @Override
    public Peminjaman getPeminjamanById(Long id) {
        return peminjamanRepository.findById(id).orElse(null);
    }

    @Override
    public Peminjaman savePeminjaman(Peminjaman peminjaman) {
        return peminjamanRepository.save(peminjaman);
    }

    @Override
    public Peminjaman updatePeminjaman(Long id, Peminjaman peminjaman) {
        Optional<Peminjaman> existingPeminjaman = peminjamanRepository.findById(id);

        if (existingPeminjaman.isPresent()) {
            Peminjaman updatedPeminjaman = existingPeminjaman.get();
            updatedPeminjaman.setBuku(peminjaman.getBuku());
            updatedPeminjaman.setPengguna(peminjaman.getPengguna());
            updatedPeminjaman.setTanggal_pinjam(peminjaman.getTanggal_pinjam());
            updatedPeminjaman.setTanggal_kembali(peminjaman.getTanggal_kembali());
            updatedPeminjaman.setStatus(peminjaman.getStatus());

            return peminjamanRepository.save(updatedPeminjaman);
        } else {
            return null; // Peminjaman not found
        }
    }

    @Override
    public void deletePeminjaman(Long id) {
        peminjamanRepository.deleteById(id);
    }
}