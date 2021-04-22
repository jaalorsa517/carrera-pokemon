# Analisis de juego de carros

## Análisis profundo

1. Jugadores: máquina y humanos. El analista decide el limite.
2. Carros: Igual cantidad de carros a numero de jugadores.
3. Carril: cada carro está en un carril
4. Pista: Todos los carriles pertenecen a una pista. Existen varias pistas.
5. Dado: Debe existir un dado que lance un numero al azar entre el 1 y el 6, incluidos los extremos. 
6. Recorrido: El resultado del dado se multiplica por 100 para determinar el avance del carro.
7. El podio: Se guarda el orden de llegada de los carros.
8. Guardar datos: Se debe guardar los resultados con los **nombres** de los conductores, las veces que ha **ganado** y su **posición**.

## Requisitos funcionales

1. Configuración del juego
   * Cada pista tiene x kilometros.
2. Inicio del juego
   * Identificador de pista
3. Podio
   * Se debe seleccionar primer, segundo y tercer lugar
4. Guardar resultados
   * Guardar nombre jugador, posición, veces que ha ganado

## Requisitos no funcionales

1. Fijar el número de jugadores
2. Diferenciar jugadores orgánicos y no orgánicos.
3. Crear dado
4. Dashboard con el identificador de la pista para previsualizar los resultados de la carrera.


## Diagramas

A continuación, los diagrama de caso de uso y diagrama de clases:
![diagramas](https://i.ibb.co/QMZSFqM/carrera-carros.png)