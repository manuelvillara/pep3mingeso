package com.example.preguntaservice.repositories;

import com.example.preguntaservice.entities.PreguntaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PreguntaRepository extends JpaRepository<PreguntaEntity,Integer> {

    @Query("SELECT e from PreguntaEntity e where e.id =:id")
    PreguntaEntity findByIdPrograma(@Param("id") Integer id);

    @Query("SELECT e from PreguntaEntity e where e.dificultad =:dificultad")
    List<PreguntaEntity> findByDificultad(@Param("dificultad") String dificultad);

}
