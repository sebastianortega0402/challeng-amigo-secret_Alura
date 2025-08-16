let amigos = [];

function agregarAmigo(){
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value.trim();

    if (nombre === ''){
        alert('Por favor, inserta un nombre.');
        return;
    } 

    // Actualizar el array de amigos
    amigos.push(nombre);
    console.log(amigos);

    // Limpiar el campo de entrada
    amigoInput.value = "";

    // Llamar a la función para actualizar la lista en el HTML
    actualizarListaAmigos();
}

function actualizarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos a la lista
    amigos.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo(){
//Validar que haya amigos disponibles//
if (amigos.length ===0){
    alert("¡Por favor, añade al menos un amigo para sortear!");
       return;
}
//Generar un índice aleatorio://
let indiceAleatorio = Math.floor(Math.random()*amigos.length);
//Obtener el nombre sorteado://
let amigoSorteado = amigos[indiceAleatorio];
 //Mostrar el resultado//
 let resultadoElemento = document.getElementById("resultado");
 resultadoElemento.innerHTML = `<p> El amigo sorteado es : ${amigoSorteado} </p>`;
}