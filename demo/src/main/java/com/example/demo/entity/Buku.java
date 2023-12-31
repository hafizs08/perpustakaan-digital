package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Buku")
public class Buku {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_buku;

    @Column(name = "judul") 
    private String judul;

    @Column(name = "penulis") 
    private String penulis;

    @Column(name = "tahun_terbit") 
    private int tahun_terbit;

    @Column(name = "isbn") 
    private String isbn;

    @Column(name = "gambar")
    private String gambar;  

    @Column(name = "jumlah_buku") 
    private int jumlah_buku;
    
    @Column(name = "total_rating", nullable = false)
    private int totalRating = 0;

    @Column(name = "jumlah_pengguna_rating", nullable = false)
    private int jumlahPenggunaRating = 0;

    @Column(name = "rata_rata_rating")
    private Double rataRataRating = 0.0;


    public void tambahRating(int rating) {
        this.totalRating += rating;
        this.jumlahPenggunaRating++;
        hitungRataRataRating();
    }

    public void hitungRataRataRating() {
        if (jumlahPenggunaRating == 0) {
            this.rataRataRating = 0.0;
        } else {
            this.rataRataRating = (double) totalRating / jumlahPenggunaRating;
        }
    }
}