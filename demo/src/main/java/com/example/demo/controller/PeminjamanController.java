package com.example.demo.controller;


import com.example.demo.entity.Peminjaman;
import com.example.demo.service.PeminjamanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/peminjaman")
public class PeminjamanController {

    @Autowired
    private PeminjamanService peminjamanService;

    @GetMapping
    public List<Peminjaman> getAllPeminjaman() {
        return peminjamanService.getAllPeminjaman();
    }

    @GetMapping("/{id}")
    public Peminjaman getPeminjamanById(@PathVariable Long id) {
        return peminjamanService.getPeminjamanById(id);
    }

    @PostMapping
    public Peminjaman savePeminjaman(@RequestBody Peminjaman peminjaman) {
        return peminjamanService.savePeminjaman(peminjaman);
    }

    @PutMapping("/{id}")
    public Peminjaman updatePeminjaman(@PathVariable Long id, @RequestBody Peminjaman peminjaman) {
        return peminjamanService.updatePeminjaman(id, peminjaman);
    }

    @DeleteMapping("/{id}")
    public void deletePeminjaman(@PathVariable Long id) {
        peminjamanService.deletePeminjaman(id);
    }
}