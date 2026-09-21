# Agencia de Viajes — Dirección visual

## Especificación de referencia (ground truth)

La página debe conservar la sensación de la referencia compartida: una experiencia vertical de pantalla completa con **fondo negro casi absoluto**, composición editorial de alto contraste, tipografía sans serif blanca de gran tamaño, un paisaje desértico en rojos y naranjas como protagonista, navegación mínima y una lectura tipo cartel de viaje contemporáneo. La atmósfera debe sentirse cinematográfica, aventurera y premium, no como una plantilla turística convencional.

## Dirección elegida: Expedición infrarroja editorial

### Design Movement
Diseño editorial digital contemporáneo mezclado con brutalismo suizo y fotografía de campaña outdoor tratada como póster de autor.

### Core Principles
1. **La imagen manda:** el paisaje ocupa la mayor superficie visual y los textos se colocan como anotaciones editoriales.
2. **Contraste extremo:** negro carbón, blanco cálido y un rojo magma propio de la marca.
3. **Asimetría controlada:** la composición evita el centrado perfecto; mezcla bloques desplazados, líneas, números y un panel lateral.
4. **Ritmo de revista:** etiquetas pequeñas, títulos condensados, datos de viaje y llamadas a la acción con cadencia visual.

### Color Philosophy
El negro no es un fondo neutro: funciona como el espacio nocturno desde el que se observa un destino. El rojo magma evoca la arena caliente y la energía del viaje; el naranja aparece solo en la fotografía para que el acento de marca conserve carácter y no se convierta en una interfaz chillona. El blanco cálido mantiene legibilidad sin romper la sensación fotográfica.

### Layout Paradigm
Hero de pantalla completa con la foto entrando desde el borde derecho y cruzando la composición en diagonal. La navegación se ubica en una franja superior fina; el contenido principal se divide entre un bloque tipográfico izquierdo y una tarjeta de expedición desplazada. El resto de la página continúa con módulos horizontales y una ficha de itinerario, manteniendo una columna lateral de metadatos.

### Signature Elements
- Una línea vertical de navegación lateral con números de capítulo y pequeños puntos indicadores.
- Etiquetas técnicas en mayúsculas pequeñas: `EXPEDICIÓN / 07`, duración, región y temporada.
- Bloques rojos sólidos usados como subrayados, botones y cortes editoriales, nunca como degradados.

### Interaction Philosophy
Las interacciones deben sentirse como hojear una revista de viaje: cambios de color precisos, desplazamientos suaves y estados activos muy claros. Los botones responden con una leve contracción y los destinos se elevan apenas, sin rebotes ni efectos decorativos.

### Animation
Revelado inicial en cascada de 40–70 ms entre etiqueta, titular, párrafo y CTA; el paisaje realiza un desplazamiento horizontal sutil al entrar. Las tarjetas de destino usan `transform` y `opacity` solamente, con una transición de 220 ms. Respetar `prefers-reduced-motion` y evitar animar layout.

### Typography System
- Display: **Space Grotesk** en 600–700 para titulares de gran tamaño y datos principales.
- Body: **DM Sans** en 400–500 para navegación, descripciones y controles.
- Jerarquía: titulares entre 4.5rem y 8rem en desktop, texto de cuerpo de 1rem–1.125rem, microcopy de 0.65rem–0.75rem con tracking amplio.

### Brand Essence
**Viajes de autor para quienes prefieren el horizonte a la ruta marcada; curamos expediciones con carácter, contexto y tiempo para mirar.**

Personalidad: **precisa, indómita, cinematográfica**.

### Brand Voice
Los titulares suenan directos, sensoriales y seguros. Los CTA invitan a elegir una dirección, no a “empezar”. El microcopy es breve y útil.

Ejemplos:
- “El desierto no se visita. Se atraviesa.”
- “Ver la ruta”

### Wordmark & Logo
El wordmark será `RUMBO/` en DM Sans semibold con una barra roja inclinada como signo de dirección. El isotipo será una flecha geométrica quebrada, sin texto, inspirada en una coordenada topográfica; se utilizará en el header y como favicon.

### Signature Brand Color
**Rojo magma — `#F0442E`**. Un rojo cálido, intenso y reconocible que conecta la marca con la arena al atardecer y crea un punto de orientación sobre el negro.

## Decisiones de implementación

La interfaz será una single page responsive con navegación anclada, un hero visual, módulos de destinos, una ficha de experiencia destacada y un CTA final. Los controles de “Ver la ruta” y “Explorar destinos” desplazarán al usuario a secciones reales de la página; el menú móvil será funcional y accesible. La imagen principal será un paisaje desértico rojo/orange con tratamiento oscuro para mantener contraste; las imágenes secundarias se usarán una sola vez por módulo.

## Style Decisions

- Mantener el fondo negro mate y la imagen desértica como columna vertebral de la experiencia.
- No usar gradientes morados, tarjetas redondeadas de forma uniforme ni el patrón de landing page centrada.
- Priorizar bloques editoriales desplazados, líneas finas y acentos rojos sólidos.

### Ajustes aceptados tras la revisión visual

- El negro carbón debe seguir siendo la atmósfera dominante; el marfil funcionará como pausa editorial puntual, no como fondo recurrente.
- Las rutas se presentan como expediciones visuales con metadatos, coordenadas y una jerarquía asimétrica, evitando la sensación de catálogo turístico.
- La numeración vertical, las reglas y los microdatos acompañan a cada sección para construir un único cuaderno de campo.
- El rojo magma se reserva para dirección y decisión: capítulos, slashes, botones, rutas y la conversión final.

### Style Decisions — segunda iteración

La sección peruana debe conservar una columna editorial constante con capítulos, coordenadas y reglas finas para que los lugares se lean como páginas de un cuaderno de expedición. Los llamados a la acción usarán lenguaje de dirección y ruta, no verbos turísticos genéricos. El rojo magma seguirá siendo el corte decisivo del contacto, pero con una trama de líneas y metadatos negros que lo conecte con el resto del sistema.
