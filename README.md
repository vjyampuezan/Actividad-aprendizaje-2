# Aplicación Web Interactiva

## Descripción
Esta es una aplicación web interactiva diseñada como parte de la Actividad de Aprendizaje N.° 2. El proyecto incluye funcionalidades básicas desarrolladas utilizando HTML, CSS y JavaScript. Las funcionalidades están organizadas en tres páginas principales: Inicio, Funcionalidades Lógicas y Registro de Usuarios.

## Requisitos del Proyecto
El proyecto cumple con los siguientes requisitos:

1. *Página de Inicio*:
   - Muestra los datos personales del estudiante: nombre, correo y curso.

2. *Página de Funcionalidades Lógicas*:
   - Comparación de números utilizando una estructura condicional if.
   - Uso de switch para determinar el mes correspondiente a un número del 1 al 12.
   - Gestión de un array para almacenar y mostrar nombres dinámicamente.

3. *Página de Registro de Usuarios*:
   - Formulario con los campos: ID, cédula, nombres y apellidos, fecha de nacimiento y ciudad.
   - Redirección a una página que muestra los datos registrados en formato tabular.

4. *Uso exclusivo de Arrow Functions*: Todo el código JavaScript está implementado con funciones de flecha.

5. *Diseño y Organización*:
   - Navegación funcional entre las páginas.
   - Estilo CSS general aplicado a todas las páginas.
   - Estructura organizada en carpetas: styles para CSS y scripts para JavaScript.


## Estructura del Proyecto

```
function test(){
Actividad_Web_Interactiva/
├── index.html
├── inicio.html
├── funcionalidades.html
├── registro.html
├── tabla.html
├── styles/
│   └── style.css
├── scripts/
    ├── funcionalidades.js
    ├── registro.js
    └── tabla.js
```

## Instrucciones para Ejecutar
1. Clona este repositorio en tu computadora local:
   bash
   git clone <URL_DEL_REPOSITORIO>
   

2. Abre el archivo index.html en un navegador web.

3. Navega a través de las páginas utilizando el menú de navegación para probar las funcionalidades.

## Funcionalidades Detalladas
### Página de Inicio
Muestra información básica del estudiante:
- Nombre: Veronica Yampuezan
- Correo: vjyampuezan@espe.edu.ec
- Curso: NRC 1382

### Página de Funcionalidades Lógicas
- *Comparación de Números*: Compara dos números y muestra el mayor o un mensaje si son iguales.
- *Determinar Mes*: Muestra el mes correspondiente al número ingresado (1 al 12).
- *Gestión de Nombres*: Permite agregar nombres a un array y mostrarlos dinámicamente.

### Página de Registro de Usuarios
Permite registrar datos básicos de usuarios y redirige a una página donde se muestran en una tabla.

### Página de Tabla de Usuarios
Muestra en formato tabular los datos registrados previamente en la página de registro.
