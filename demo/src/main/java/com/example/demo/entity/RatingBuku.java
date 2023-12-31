package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rating_buku")
public class RatingBuku {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_ratingBuku;

    @ManyToOne
    @JoinColumn(name = "id_buku", nullable = false)
    private Buku buku;

    @ManyToOne
    @JoinColumn(name = "id_pengguna", nullable = false)
    private Pengguna pengguna;

    @Column(name = "rating")
    private int rating;

    @Column(name = "komentar")  
    private String komentar;

    @PostPersist
    @PostUpdate
    public void updateBukuRating() {
        buku.tambahRating(rating);
    }

}


