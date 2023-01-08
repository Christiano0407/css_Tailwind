# css_Tailwind

First course of Tailwind CSS modern. Projects with Tailwind CSS.

# Platzi

> Home Platzi

[Platzi](https://platzi.com/home)

# Tailwind CSS

> Framework CSS

[tailwind_CSS](https://tailwindcss.com/)

> Documentation

[documentation](https://tailwindcss.com/docs/installation)

> Dark Mode

[tailwind_dark](https://tailwindcss.com/docs/dark-mode)

```javascript

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

```

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

## Tools Web

## CDN

[cdn](https://cdnjs.com/)

## Editor MD (Markdown)

[editor_md](https://pandao.github.io/editor.md/en.html)

## Google Font

[google_font](https://fonts.google.com/)

## Vite Js

[vite](https://vitejs.dev/)

## Media Queries: Mobile && Tablet && Screen Desktop

> Media Querie: Mobile

![](/src/img/screenShot/mobile_white.png)

> Dark Mode: Mobile

![](/src/img/screenShot/mobile_dark.png)

> Media Queri: Tablet

![](/src/img/screenShot/tablet_white.png)

> Media Querie: Screen Desktop

![](/src/img/screenShot/screen_lg.png)

### MIT License

MIT License

Copyright (c) 2023 Chris_Velázquez04

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
