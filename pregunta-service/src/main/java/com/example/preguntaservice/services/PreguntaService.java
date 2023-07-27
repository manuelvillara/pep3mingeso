package com.example.preguntaservice.services;

import com.example.preguntaservice.entities.PreguntaEntity;
import com.example.preguntaservice.repositories.PreguntaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class PreguntaService {

    @Autowired
    PreguntaRepository preguntaRepository;

    private final Logger logg = LoggerFactory.getLogger(PreguntaService.class);

    Integer PREGUNTAS_POR_PRUEBA = 4;
    double NOTA_MAXIMA = 7.0;
    double NOTA_MINIMA = 1.0;

    public PreguntaEntity agregarPregunta(PreguntaEntity pregunta){
        PreguntaEntity nuevaPregunta = preguntaRepository.save(pregunta);
        return nuevaPregunta;
    }

    public List<PreguntaEntity> obtenerData(){
        return (List<PreguntaEntity>) preguntaRepository.findAll();
    }

    public PreguntaEntity obtenerProblemaPorId(Integer id){
        return preguntaRepository.findByIdPrograma(id);
    }

    public List <PreguntaEntity> obtenerPreguntasPorDificultad(String dificultad){
        List<PreguntaEntity> programas = preguntaRepository.findByDificultad(dificultad);
        return programas;
    }

    public List<PreguntaEntity> preguntasAleatoriasPorDificultad(List<PreguntaEntity> dataFiltrada){
        List<PreguntaEntity> preguntasAleatorias = new ArrayList<>();
        while ( preguntasAleatorias.size() != 4 ){
            Random rand = new Random();
            PreguntaEntity elementoAleatorio = dataFiltrada.get( rand.nextInt( dataFiltrada.size() ) );
            if ( !preguntasAleatorias.contains(elementoAleatorio) )
            {
                preguntasAleatorias.add(elementoAleatorio);
            }
        }
        return preguntasAleatorias;
    }

    public double calculoNotaPrueba(List<String> respuestasUsuario, List<PreguntaEntity> preguntasPrueba){
        List<Double> notas = new ArrayList<>();
        double promedio = 0;

        for ( int i = 0 ; i < PREGUNTAS_POR_PRUEBA; i++ ){
            if ( respuestasUsuario.get(i).equals(preguntasPrueba.get(i).getRespuesta()) ){
                notas.add(NOTA_MAXIMA);
            }
            else{ notas.add(NOTA_MINIMA); }
        }

        for ( int i = 0 ; i < PREGUNTAS_POR_PRUEBA; i++ ){
            promedio = promedio + notas.get(i);
        }
        promedio = promedio/PREGUNTAS_POR_PRUEBA;
        return promedio;
    }


}
