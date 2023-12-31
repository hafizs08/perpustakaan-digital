package com.example.demo.controller;

import com.example.demo.entity.Buku;
import com.example.demo.service.BukuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/buku")
public class BukuController {

    @Autowired
    private BukuService bukuService;

    @GetMapping
    public List<Buku> getAllBuku() {
        return bukuService.getAllBuku();
    }

    @GetMapping("/{id}")
    public Buku getBukuById(@PathVariable Long id) {
        return bukuService.getBukuById(id);
    }

    @PostMapping
    public Buku saveBuku(@RequestBody Buku buku) {
        return bukuService.saveBuku(buku);
    }

    @PutMapping("/{id}")
    public Buku updateBuku(@PathVariable Long id, @RequestBody Buku buku) {
        return bukuService.updateBuku(id, buku);
    }

    @DeleteMapping("/{id}")
    public void deleteBuku(@PathVariable Long id) {
        bukuService.deleteBuku(id);
    }
}