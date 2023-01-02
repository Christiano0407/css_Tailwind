# css_Tailwind

First course of Tailwind CSS modern. Projects with Tailwind CSS.

## Tailwind CSS

Directivas Tailwind CSS v3.0
Una directiva es una instrucción que nos sirve para insertar código a nuestro archivo final CSS.

- @tailwind base → Inicializa todos los elementos de nuestro HTML sin estilo.
- @tailwind components → Nos permite acceder a todas las clases de tailwind.
- @tailwind utilities → Agrega todas las utilidades al proyecto y nos permite acceder a ellas.
Otras directivas:

- @tailwind → Inserta las directivas base, components, utilities y variants.
- @layer → Le dice a tailwind a qué bloque de código pertenece un conjunto de estilos personalizados. Las capas válidas son base, componentes y utilidades.
- @apply → Incorpora cualquier clase de Tailwind en el CSS personalizado, es útil cuando se necesita escribir CSS personalizado.
- @variants → Es útil para controlar dónde Tailwind inyecta el hover, focus, responsive u otras variantes de cada clase.
Las directivas se diferencian por un @ al inicio, también se tienen las funciones screen() y theme().
