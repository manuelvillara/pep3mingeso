package com.example.preguntaservice.controllers;

import com.example.preguntaservice.entities.PreguntaEntity;
import com.example.preguntaservice.services.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pregunta")
public class PreguntaController {

    @Autowired
    PreguntaService preguntaService;

    @GetMapping
    ResponseEntity<List<PreguntaEntity>> verDatos(){
        List<PreguntaEntity> preguntas = preguntaService.obtenerData();
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @PostMapping("/nueva-pregunta")
    public ResponseEntity<PreguntaEntity> agregarPregunta(@RequestBody PreguntaEntity pregunta){
        PreguntaEntity nuevaPregunta = preguntaService.agregarPregunta(pregunta);
        if( nuevaPregunta == null ){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(nuevaPregunta);
    }

    @GetMapping("/{dificultad}")
    public ResponseEntity<List<PreguntaEntity>> pruebaPorDificultad(@PathVariable("dificultad") String dificultad){
        List<PreguntaEntity> preguntasFiltradas = preguntaService.obtenerPreguntasPorDificultad(dificultad);
        if( preguntasFiltradas.isEmpty() ){
            return ResponseEntity.noContent().build();
        }
        List<PreguntaEntity> prueba = preguntaService.preguntasAleatoriasPorDificultad(preguntasFiltradas);
        if( prueba.isEmpty() ){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(prueba);
    }

}
