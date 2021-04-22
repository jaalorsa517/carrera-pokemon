# EXPLICACION DE LA SOLUCION

## DEMO
La solución se encuentra deployada en https://carrera-pokemon.jaalorsa.com

## Descripción
La solución propuesta (para el problema que se explica en la parte inferior) es un software realizado con javascript. Las tecnologías usadas son:
* **firebase**: para la persistencia de datos
* **typescript**: para la creación de las clases y un poco más
* **javascript**: creación de código
* **pug y stylus**: preprocesadores de html y css, respectivamente.
* **Dia**: software para crear diagramas.
* **PWA**: página web progresiva.

## Análisis
Se analizó el enunciado (historia de usuario), realizando una sintésis de los requisitos, produciendo por defecto, los requisitos funcionales, requisitos no funcionales, diagrama de caso de uso y diagrama de clases. Todo el análisis se encuentra en la carpeta análisis.

## Estructura
El código de la solución está dentro la carpeta **src**. Dentro de esta carpeta se encuentra una carpeta llamada **models**, donde se encuentran todas las clases solicitadas por los requisitos. Dichas clases fueron hechas con typescript.
La carpeta **views**, se encuentra todo el código para la parte visual de la solución.
* **Home.vue**: En este archivo es donde se solicitan los datos necesarios para que pueda empezar la solución.
* **Juego.vue**: En este archivo se encuentra la implementación de todo el juego. Se crea los objetos necesarios y se instancia la clase Juego para el control de la aplicación. Todo este código se puede visualizar en el método **"created"**(ciclo de vida dentro un componente de Vue) y en el método **"onThrow"** (manejador del evento del boton de lanzar el dado).
* **Podio.vue**: Este archivo es el responsable de visualizar el podio y mostrar un registro de los jugadores(orgánicos e inorgánicos) que han ganado el podio.

## Instruciones para probar en local
1. Instalar un server http. Se recomienda [http-server](https://www.npmjs.com/package/http-server).
2. Construir la aplicación con el comando `npm run build`
3. Subir el server con el comando `http-server dist`

## Autor
Jaime Ortiz
Desarrollador fullStack Vue-Flask
[Portafolio](https://jaalorsa.com)

# CHALLENGE - JUEGO DE CARROS POR CONSOLA - GRUPO B #

## Summary ##

En este reto vamos a modelar un concurso de carros, donde vamos a tener ciertas reglas del juego. Para este reto es necesario tener los conocimientos básicos de Java/C\# usando el paradigma de programación orientada a objetos. Esto implica conocer de modelamiento de objetos, ademas se deberá guarda en base de datos los resultados del juego.

Dentro del reto se debe considera lo siguiente:

 *   Manejo de clases u objetos
 *   Persistencia de datos
 *   Manejos de listas o colecciones
 *   Conocimiento de Java o C\#
 *   Manejo de Git (versión de control)

  


Solo aplique al reto si te siente capaz de hacerlo.

¡Buena suerte!

## Use Case/Problem ##

Lo que se busca en este **juego** es crear unos **carros** y posicionarlo en una **pista** (cada carro tiene un **conductor**), puede existir tantos **carros** como **carriles**, cada pista deberá tener el mismo **limite de distancia** (kilómetros) para el recorrido del **carro**, los carros **avanzan de forma aleatoria** aumentado su **distancia** por medio de **metros** (los kilómetros de debe convertir a metros para que el avance sea en metros)

  


Cada avance debe existir un **dado** (de 1 a 6) que permita mover el **carro** y se debe multiplicar por 100, donde si se tira el dado y sacas 5 entonces debería ser 5\*100 = 500 metros de recorrido.

  


Al final debe existir un **podio** donde se clasifique **primer**, **segundo** y **tercer ganador**.

  


## Funcionalidades ##

  


 *  **Configurar Juego**\: Crear juego con jugadores, el juego debe tener los limites de kilómetros por cada pista (un jugador puede ser un conductor y un conductor debe tener un carro asociado y un carro debe estar asociado a un carril que a su vez debe estar en una pista)
 *  **Iniciar el juego**: iniciar con un identificador del juego, se debe tener la lista de carros en donde se pueda iterar y avanzar según la posición de la pista o carril, esto debe ser de forma aleatoria (por medio del dado).
 *  **Asignar podio (fin del juego)**\: Se debe seleccionar primer, segundo y tercer lugar en la medida que los carros llegan a la meta (asignar al podio).
 *  **Guardar datos**\: Se debe persistir los resultados con los nombres de los conductores en la posición del podio y agregar un contador de las veces que ha ganado.

  


## Evaluation criteria ##

| Criteria                                                                                 | Percentage |
| ---------------------------------------------------------------------------------------- | ---------- |
| Aplica los principios de programación orientada a objetos                                | 31.0 %     |
| Realiza la persistencia de los resultados obtenidos de los ganadores                     | 31.0 %     |
| Creación de objetos de entidades; pista, juego, carril, carro, conductor, jugador, podio | 30.0 %     |
| Métodos con menos de 6 lineas de código                                                  | 8.0 %      |