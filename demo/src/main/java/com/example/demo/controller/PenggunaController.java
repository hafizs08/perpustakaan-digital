package com.example.demo.controller;

import com.example.demo.entity.Pengguna;
import com.example.demo.repository.PenggunaRepository;
import com.example.demo.service.PenggunaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/pengguna")
public class PenggunaController {

    @Autowired
    private PenggunaService penggunaService;

    @Autowired
    private PenggunaRepository penggunaRepository;

    @GetMapping
    public List<Pengguna> getAllPengguna() {
        return penggunaService.getAllPengguna();
    }

    @GetMapping("/{id}")
    public Pengguna getPenggunaById(@PathVariable Long id) {
        return penggunaService.getPenggunaById(id);
    }

    @PostMapping
    public Pengguna savePengguna(@RequestBody Pengguna pengguna) {
        return penggunaService.savePengguna(pengguna);
    }

    @PutMapping("/{id}")
    public Pengguna updatePengguna(@PathVariable Long id, @RequestBody Pengguna pengguna) {
        return penggunaService.updatePengguna(id, pengguna);
    }

    @DeleteMapping("/{id}")
    public void deletePengguna(@PathVariable Long id) {
        penggunaService.deletePengguna(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Pengguna pengguna) {
    Pengguna penggunaDitemukan = penggunaRepository.findByEmail(pengguna.getEmail());

    if (penggunaDitemukan != null && penggunaDitemukan.getKataSandi().equals(pengguna.getKataSandi())) {
        // Berhasil login, kirim informasi pengguna ke klien
        Map<String, Object> responseData = new HashMap<>();
        responseData.put("id_pengguna", penggunaDitemukan.getId_pengguna());
        responseData.put("nama", penggunaDitemukan.getNama());
        responseData.put("username", penggunaDitemukan.getUsername());
        // tambahkan properti lain yang perlu disertakan

        return ResponseEntity.ok(responseData);
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Gagal login. Periksa email dan kata sandi Anda.");
    }
}
}
