# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Criterios de aceptación del proyecto](#3-criterios-de-aceptación-del-proyecto)
* [4. Diseño de la interfaz de usuario](#4-diseño-de-la-interfaz-de-usuario)
* [5. Diseño final](#5-diseño-final)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de _terabytes_ de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y comprensible para las usuarias
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

## 2. Resumen del proyecto

En este proyecto se manipula un conjunto de datos (_set_ de datos)
para hacerlos accesibles a través de una _página web_ de utilidad para las usuarias.

La página web permite **visualizar la data,
filtrarla, ordenarla y muestra un cálculo agregado**. En este caso se muestra el porcentaje de personajes que pertenecen a la raza: Humano

Los datos que utilizamos son:

* [Harry Potter](src/data/harrypotter/harry.json).
  En este set encontrarás una lista de los personajes,libros pociones
  y hechizos de toda la saga de
  [Harry Potter](https://harrypotter.fandom.com).
  * [Investigación con seguidoras de Harry Potter](src/data/harrypotter/README.md)

## 3. Criterios de aceptación del proyecto

Llamamos "Criterios de aceptación" a todas aquellas características que debe tener
un proyecto para ser "aceptado" como válido. En este caso se consideran las Historias
de Usuario 1, 2 y 3.

Cada Historia de Usuario tiene sus propios criterios de aceptación.

### Historias de usuario

Las Historias de Usuario son el resultado de un proceso de
investigación o _research_ de las usuarias y de algunas necesidades específicas del
producto/negocio.

#### [Historia de usuario 1]

Yo como usuario [visitante del sitio] quiero poder VER todos los nombres de los personajes para familiarizarme con ellos.

**Criterios de Aceptación:**

>* La UI es responsive (teléfonos y PC).
>* Todos los personajes aparecen en una misma vista, en forma de grilla (cuadrícula) sin ningún
>  orden en particular.
>* La vista no tiene paginación, se hace scroll desde el primer elemento hasta el último.
>* Cada cuadrícula contiene:
>
>>* Nombre de personaje
>>* Casa a la que pertenece
>>
>* La UI es exactamente igual al prototipo de alta fidelidad (colores, tamaños de bloques,tipo de letra, tamaño de letra, imágenes, etc. )

**Definición de Terminado:**

>* Todo el código está en la rama principal/main del repositorio.
>
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

#### [Historia de usuario 2]

Yo como usuario [visitante del sitio] quiero poder FILTRAR los personajes por la casa a la que pertenecen.

**Criterios de Aceptación:**

>* La UI es responsive (teléfonos y PC).
>* La UI contiene elementos para filtrar los datos (desplegables u otros).
>* Al seleccionar valores de los elementos para filtrar, en la parte inferior de la página aparece solamente el tipo de contenido filtrado.

**Definición de Terminado:**

>* Hay un test unitario para la función de filtrado.
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

#### [Historia de usuario 3]

Yo como usuario [visitante del sitio] quiero poder ORDENAR los personajes por sus nombres de manera alfabéticamente ascendente (A-Z) y descendente (Z-A).

**Criterios de Aceptación:**

>* La UI es responsive (teléfonos y PC)
>* La UI contiene elementos para ordenar los datos (desplegables u otros).
>* Al seleccionar valores de los elementos para ordenar, en la parte inferior de la página aparece solamente el contenido ordenado según el criterio seleccionado.

**Definición de Terminado:**

>* Hay un test unitario para la función de ordenado.
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

#### [Historia de usuario 4]

Yo como usuario [visitante del sitio] quiero poder DESPLEGAR los Datos Curiosos, Hechizos, Pociones y Libros.

**Criterios de Aceptación:**

>* La UI es responsive (teléfonos y PC)
>* La UI contiene elementos para mostrar los datos (desplegables u otros).
>* Al seleccionar valores de los elementos para mostrar, en la parte inferior de la página aparece solamente el tipo de contenido filtrado.

**Definición de Terminado:**

>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

#### [Historia de usuario 5]

Yo como usuario [visitante del sitio] quiero poder ver porcentaje de personajes.

**Criterios de Aceptación:**

>* La UI es responsive (teléfonos y PC)
>* La UI contiene elementos para mostrar los datos (desplegables u otros).
>* Al seleccionar valores de los elementos para mostrar, en la parte inferior de la página aparece solamente el tipo de contenido filtrado.

**Definición de Terminado:**

>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

## 4. Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

![Prototipo_baja](/src/imagenes/PROTOTIPO_BAJA.png)

#### Prototipo de alta fidelidad

![Prototipo_alta](/src/imagenes/PROTOTIPO_ALTA.png)

## 5. Diseño final

![Producto_final](/src/imagenes/PRODUCTO_FINAL.png)
