# 🎁 Amigo Secreto

![Versión](https://img.shields.io/badge/versión-1.0.0-blue)
![Licencia](https://img.shields.io/badge/licencia-Unlicense-green)
![Estado](https://img.shields.io/badge/estado-Estable-success)

Una aplicación web interactiva para organizar sorteos de "Amigo Secreto" de forma sencilla y divertida, creada con HTML, CSS y JavaScript vanilla.

![Vista previa de la aplicación](assets/preview.png)

## 📋 Tabla de Contenidos

- [🌟 Descripción](#-descripción)
- [✨ Características](#-características)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [⚙️ Requisitos del Sistema](#️-requisitos-del-sistema)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [📖 Guía de Uso](#-guía-de-uso)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎨 Personalización](#-personalización)
- [📊 Funcionamiento Interno](#-funcionamiento-interno)
- [🧪 Pruebas](#-pruebas)
- [🐛 Resolución de Problemas](#-resolución-de-problemas)
- [🤝 Contribuciones](#-contribuciones)
- [📜 Licencia](#-licencia)
- [📧 Contacto](#-contacto)

## 🌟 Descripción

La aplicación **Amigo Secreto** está diseñada para simplificar la experiencia de organizar sorteos para intercambios de regalos entre amigos, familiares o compañeros de trabajo. Este proyecto nace de la necesidad de facilitar este proceso eliminando la complejidad logística tradicional.

La solución combina una interfaz de usuario intuitiva con un algoritmo de selección aleatoria justo, ofreciendo una alternativa digital moderna a los métodos manuales de papelitos en una bolsa. El diseño responsivo garantiza que la aplicación funcione perfectamente tanto en dispositivos móviles como en ordenadores de escritorio.

## ✨ Características

- **✅ Gestión de Participantes:** Interfaz sencilla para agregar nombres a la lista de participantes.
- **🔍 Validación Inteligente:** Sistema que previene entradas duplicadas, vacías o inválidas.
- **🎲 Sorteo Aleatorio Equitativo:** Algoritmo que garantiza selecciones completamente aleatorias.
- **👁️ Visualización Inmediata:** Presentación clara del resultado del sorteo.
- **🔔 Sistema de Alertas:** Notificaciones contextuales que guían al usuario.
- **📱 Diseño Adaptativo:** Experiencia fluida en cualquier dispositivo o tamaño de pantalla.
- **🎨 Interfaz Moderna:** Estética contemporánea con paleta de colores atractiva.
- **♿ Accesibilidad:** Implementación de atributos ARIA para usuarios con tecnologías asistivas.

## 🛠️ Tecnologías Utilizadas

- **HTML5**
  - Estructura semántica para mejorar la accesibilidad
  - Atributos ARIA para compatibilidad con lectores de pantalla
  - Metadatos optimizados para SEO

- **CSS3**
  - Sistema de variables CSS para gestión coherente de temas
  - Flexbox para layouts responsivos avanzados
  - Media queries para adaptabilidad a diferentes dispositivos
  - Animaciones y transiciones para mejorar la experiencia de usuario

- **JavaScript (ES6+)**
  - Manipulación dinámica del DOM
  - Gestión de eventos para interactividad
  - Algoritmo de selección aleatoria
  - Validación de entradas en tiempo real

- **Recursos Externos**
  - Google Fonts: 'Inter' para texto general y 'Merriweather' para titulares
  - Iconografía optimizada de Material Design

## ⚙️ Requisitos del Sistema

- **Navegadores compatibles:**
  - Chrome 60+
  - Firefox 60+
  - Safari 12+
  - Edge 79+
  - Opera 47+

- **Dispositivos:**
  - Funciona en dispositivos móviles, tablets y escritorio
  - Resolución mínima recomendada: 320px de ancho

- **Conexión a internet** (solo necesaria para cargar fuentes de Google la primera vez)

## 🚀 Instalación y Configuración

### Método 1: Descarga Directa

1. **Descarga el repositorio:**
   - Haz clic en el botón verde "Code" en la parte superior de esta página
   - Selecciona "Download ZIP"
   - Extrae el archivo ZIP en la ubicación de tu elección

2. **Ejecución local:**
   - Abre el archivo `index.html` en tu navegador preferido

### Método 2: Clonación con Git

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   cd amigo-secreto
   ```

2. **Ejecución local:**

   ```bash
   # Si tienes Python instalado:
   python -m http.server 8000
   # Luego visita http://localhost:8000 en tu navegador
   
   # Alternativa con Node.js:
   npx serve
   ```

### Método 3: Despliegue en GitHub Pages

1. **Activa GitHub Pages:**
   - Ve a la pestaña "Settings" del repositorio
   - Navega a la sección "Pages"
   - Selecciona la rama "main" como fuente
   - Guarda los cambios

2. **Accede a la aplicación:**
   - La aplicación estará disponible en `https://tu-usuario.github.io/amigo-secreto`

## 📖 Guía de Uso

### Añadir Participantes

1. Ingresa el nombre del participante en el campo "Escribe un nombre".
2. Haz clic en el botón "Añadir" o presiona Enter.
3. El nombre aparecerá en la lista de participantes debajo del formulario.

### Realizar el Sorteo

1. Asegúrate de haber agregado al menos dos participantes.
2. Haz clic en el botón "Sortear amigo".
3. El nombre seleccionado aleatoriamente aparecerá destacado en verde.

### Consideraciones Importantes

- No se permiten nombres duplicados o entradas vacías.
- Se necesitan mínimo dos participantes para realizar el sorteo.
- Cada sorteo es independiente y puede seleccionar a cualquier participante.

## 📁 Estructura del Proyecto

```text
amigo-secreto/
├── index.html          # Estructura principal y elementos de la interfaz
├── app.js              # Lógica de la aplicación y funciones interactivas
├── style.css           # Estilos, diseño y comportamiento visual
├── assets/             # Recursos estáticos
│   ├── amigo-secreto.png      # Imagen principal del banner
│   └── play_circle_outline.png # Icono del botón de sorteo
├── README.md           # Documentación del proyecto
└── LICENSE             # Archivo de licencia
```

### Desglose de Archivos Principales

#### `index.html`

Contiene la estructura semántica de la aplicación, incluyendo:

- Metadatos y enlaces a recursos externos
- Estructura del formulario de ingreso
- Contenedores para listas de participantes y resultados
- Implementación de atributos de accesibilidad

#### `app.js`

Implementa la lógica principal:

- Gestión del arreglo `amigos` como estructura de datos central
- Función `agregarAmigo()` para validar y agregar participantes
- Función `sortearAmigo()` que implementa el algoritmo de selección aleatoria
- Manipulación del DOM para reflejar cambios en la interfaz

#### `style.css`

Define la apariencia visual y comportamiento responsivo:

- Sistema de variables CSS para temas consistentes
- Estructuras flexbox para layouts adaptables
- Estados interactivos para elementos de la interfaz
- Optimizaciones para diferentes tamaños de pantalla

## 🎨 Personalización

### Modificación de Colores

Puedes personalizar la paleta de colores editando las variables CSS al inicio del archivo `style.css`:

```css
:root {
    --color-primary: #4B69FD;    /* Color principal (azul) */
    --color-secondary: #FFF9EB;  /* Color de fondo secundario */
    --color-tertiary: #C4C4C4;   /* Color para elementos auxiliares */
    --color-button: #fe652b;     /* Color de botones principales */
    --color-button-hover: #e55720; /* Estado hover de botones */
    --color-text: #444444;       /* Color de texto principal */
    --color-white: #FFFFFF;      /* Color blanco para contraste */
}
```

### Cambio de Tipografías

Para usar diferentes fuentes:

1. Modifica los enlaces a Google Fonts en `index.html`:

   ```html
   <link href="https://fonts.googleapis.com/css2?family=TuFuentePrincipal:wght@400;700&family=TuFuenteSecundaria:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
   ```

2. Actualiza las referencias en `style.css`:

```css
.main-title {
    font-family: "TuFuenteSecundaria", serif;
}

.section-title, button, .input-name {
    font-family: "TuFuentePrincipal", sans-serif;
}
```

### Adición de Nuevas Funcionalidades

Para extender la funcionalidad, puedes modificar `app.js`. Algunos ejemplos:

1. **Eliminar participantes:**

   ```javascript
   function eliminarAmigo(index) {
      amigos.splice(index, 1);
      actualizarListaVisual();
   }

   function actualizarListaVisual() {
      let lista = document.getElementById("listaAmigos");
      lista.innerHTML = "";
      amigos.forEach((amigo, index) => {
         let nuevoElemento = document.createElement("li");
         nuevoElemento.textContent = amigo;
         nuevoElemento.onclick = () => eliminarAmigo(index);
         lista.appendChild(nuevoElemento);
      });
   }
   ```

2. **Guardar participantes en localStorage:**

```javascript
function guardarEnLocalStorage() {
    localStorage.setItem('amigosGuardados', JSON.stringify(amigos));
}

function cargarDeLocalStorage() {
    const amigosGuardados = localStorage.getItem('amigosGuardados');
    if (amigosGuardados) {
        amigos = JSON.parse(amigosGuardados);
        actualizarListaVisual();
    }
}

// Llamar a cargarDeLocalStorage() al iniciar la aplicación
document.addEventListener('DOMContentLoaded', cargarDeLocalStorage);
```

## 📊 Funcionamiento Interno

### Algoritmo de Selección

El corazón de la aplicación es el algoritmo de selección aleatoria implementado en la función `sortearAmigo()`. Este utiliza `Math.random()` multiplicado por la longitud del array de amigos para generar un índice aleatorio:

```javascript
let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
```

La selección es verdaderamente aleatoria, lo que significa que:

- Cualquier participante puede ser seleccionado con igual probabilidad
- Un mismo participante podría ser seleccionado en sorteos consecutivos
- No hay exclusión de participantes previamente seleccionados

### Flujo de Datos

1. El usuario ingresa un nombre en el campo de texto.
2. La función `agregarAmigo()` valida la entrada y:
   - Rechaza entradas vacías o inválidas
   - Agrega el nombre al array `amigos[]`
   - Actualiza la lista visual agregando un elemento `<li>`
3. Al solicitar un sorteo, `sortearAmigo()`:
   - Verifica que haya suficientes participantes
   - Selecciona aleatoriamente un nombre
   - Actualiza el elemento `#resultado` con el nombre sorteado

## 🧪 Pruebas

Para verificar el correcto funcionamiento de la aplicación, se recomienda realizar las siguientes pruebas:

### Pruebas de Validación

- Intentar agregar un nombre vacío → Debe mostrar alerta
- Intentar realizar sorteo sin participantes → Debe mostrar alerta
- Intentar realizar sorteo con un solo participante → Debe mostrar alerta

### Pruebas de Funcionalidad

- Agregar múltiples participantes → Deben aparecer correctamente en la lista
- Realizar varios sorteos consecutivos → Debe seleccionar aleatoriamente distintos participantes
- Verificar la distribución estadística de resultados en múltiples sorteos

### Pruebas de Responsividad

- Verificar visualización en dispositivos móviles (320px-480px)
- Verificar visualización en tablets (768px-1024px)
- Verificar visualización en pantallas de escritorio (1200px+)

## 🐛 Resolución de Problemas

### Problemas Comunes y Soluciones

| Problema | Posible Causa | Solución |
|----------|---------------|----------|
| El botón "Añadir" no responde | JavaScript desactivado | Verificar que JavaScript esté habilitado en el navegador |
| No se muestran las fuentes correctas | Problema de conexión | Asegurarse de tener conexión a internet para cargar Google Fonts |
| La lista de participantes no se muestra | Problema con el selector DOM | Verificar que el ID "listaAmigos" exista en el HTML |
| El resultado del sorteo no aparece | Menos de dos participantes | Agregar al menos dos participantes antes de sortear |

### Compatibilidad con Navegadores

Si experimentas problemas en navegadores específicos:

- **Internet Explorer:** Esta aplicación no es compatible con versiones antiguas de IE. Actualiza a Edge o utiliza Chrome/Firefox.
- **Safari en iOS:** Si los botones no responden, asegúrate de no tener bloqueadores de JavaScript activos.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Sigue estos pasos para contribuir al proyecto:

1. **Fork el Repositorio**
   - Haz clic en el botón "Fork" en la parte superior derecha de esta página

2. **Crea una Rama para tu Característica**

   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

3. **Realiza tus Cambios**

   ```bash
   git commit -m "Implementa: descripción breve de tu característica"
   ```

4. **Envía tus Cambios**

   ```bash
   git push origin feature/nueva-caracteristica
   ```

5. **Abre un Pull Request**

   - Visita la página de tu fork y haz clic en "New Pull Request"
   - Describe detalladamente los cambios realizados

### Guía de Estilo

- Usa indentación de 2 espacios
- Nombres de variables y funciones en camelCase
- Comenta el código cuando implementes lógica compleja
- Sigue las prácticas de HTML semántico
- Mantén la compatibilidad con navegadores modernos

## 📜 Licencia

Este proyecto se distribuye bajo la licencia **The Unlicense**, lo que significa que puedes utilizarlo libremente sin restricciones para cualquier propósito, tanto personal como comercial.

Para más detalles, consulta el archivo [LICENSE](LICENSE) incluido en este repositorio.

## 📧 Contacto

Si tienes preguntas, sugerencias o quieres contribuir de otra manera:

- **GitHub Issues:** Abre un issue en este repositorio
- **Email:** <118447447+Giaioneg@users.noreply.github.com>
- **GitHub:** <https://github.com/Giaioneg>

Desarrollado con el objetivo de aprendizaje en el area de programación en el curso impartido por Oracle y Alura.
