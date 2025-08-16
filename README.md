# 🎁 Amigo Secreto

Este es un proyecto simple para practicar la lógica de programación y la manipulación del DOM en JavaScript.  
El objetivo principal es crear una aplicación web que permita a los usuarios agregar nombres a una lista y luego sortear un **"amigo secreto"** de forma aleatoria.

---

## 🧠 Conceptos de Lógica y Programación

Para desarrollar este proyecto, hemos aplicado y reforzado los siguientes conceptos clave:

- **`array.push()`** → Agrega nuevos nombres al array `amigos`, almacenando la lista de participantes.
- **`.trim()`** → Elimina los espacios en blanco al inicio y al final del texto ingresado por el usuario. Evita nombres vacíos o con espacios extra.
- **`return`** → Detiene la ejecución de una función, por ejemplo, cuando la validación del nombre falla.
- **`Math.random()`** y **`Math.floor()`** → Combinados, generan un índice aleatorio para seleccionar a un amigo del array.
- **`.length`** → Devuelve la cantidad de elementos en el array `amigos`, clave para generar el índice aleatorio.

---

## 🛠️ Manipulación del DOM

Para interactuar con la página HTML, hemos utilizado:

- **`document.getElementById()`** → Selecciona un elemento HTML por su `id`.
- **`.innerHTML = ''`** → Limpia el contenido de un elemento para evitar duplicados.
- **`document.createElement()`** → Crea un nuevo elemento HTML (por ejemplo, un `<li>`).
- **`.textContent`** → Asigna texto al nuevo elemento creado.
- **`.appendChild()`** → Agrega el nuevo elemento como hijo de otro (por ejemplo, un `<li>` dentro de un `<ul>`).

---

## 📜 Cómo funciona el sorteo

1. El usuario ingresa un nombre y hace clic en **"Añadir"**.
2. El nombre se agrega al array `amigos`.
3. La lista en pantalla se actualiza con todos los nombres del array.
4. Cuando el usuario hace clic en **"Sortear amigo"**, el programa:
   - Verifica si hay nombres en la lista.
   - Genera un índice aleatorio.
   - Muestra el nombre del amigo sorteado en la página.

---

💡 **Este proyecto** demuestra una comprensión sólida de los fundamentos de JavaScript y su aplicación práctica para crear una experiencia de usuario dinámica.
