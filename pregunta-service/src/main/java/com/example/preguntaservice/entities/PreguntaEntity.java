package com.example.preguntaservice.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name = "pregunta")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PreguntaEntity {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String programa;
    private String respuesta;
    private String dificultad;

}
