package com.example.demo.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
@Table(name = "pengguna")
public class Pengguna {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pengguna")
    private Long id_pengguna;

    @Column(name = "Username") 
    private String Username;

    @Column(name = "kata_sandi") 
    private String kataSandi;

    @Column(name = "nama") 
    private String nama; 

    @Column(name = "email")
    private String email;

    // Correct getter for kata_sandi
    
    // Getters and Setters for other fields
}
