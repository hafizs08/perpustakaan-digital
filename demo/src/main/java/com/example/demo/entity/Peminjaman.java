package com.example.demo.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "peminjaman")

public class Peminjaman {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_peminjaman;

    @ManyToOne
    @JoinColumn(name = "id_buku")
    private Buku buku;

    @ManyToOne
    @JoinColumn(name = "id_pengguna")
    private Pengguna pengguna;

    @Temporal(TemporalType.DATE)
    private Date tanggal_pinjam;

    @Temporal(TemporalType.DATE)
    private Date tanggal_kembali;

    @Column(name = "status")
    private String status;

    // Getters and Setters
}
