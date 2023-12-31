package com.example.demo.service.impl;

import com.example.demo.entity.Pengguna;
import com.example.demo.repository.PenggunaRepository;
import com.example.demo.service.PenggunaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PenggunaServiceImpl implements PenggunaService {

    @Autowired
    private PenggunaRepository penggunaRepository;

    @Override
    public List<Pengguna> getAllPengguna() {
        return penggunaRepository.findAll();
    }

    @Override
    public Pengguna getPenggunaById(Long id) {
        return penggunaRepository.findById(id).orElse(null);
    }

    @Override
    public Pengguna savePengguna(Pengguna pengguna) {
        return penggunaRepository.save(pengguna);
    }

    @Override
    public Pengguna updatePengguna(Long id, Pengguna pengguna) {
        Optional<Pengguna> existingPengguna = penggunaRepository.findById(id);

        if (existingPengguna.isPresent()) {
            Pengguna updatedPengguna = existingPengguna.get();
            updatedPengguna.setUsername(pengguna.getUsername());
            updatedPengguna.setKataSandi(pengguna.getKataSandi());
            updatedPengguna.setNama(pengguna.getNama());
            updatedPengguna.setEmail(pengguna.getEmail());

            return penggunaRepository.save(updatedPengguna);
        } else {
            return null; // Pengguna not found
        }
    }

    @Override
    public void deletePengguna(Long id) {
        penggunaRepository.deleteById(id);
    }

   

}

