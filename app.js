// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

//Capturar el valor del campo de entrada, Validar la entrada: /

function agregarAmigo(){
    let amigoInput = document.getElementById('amigo');
    let nombre =amigoInput.value.trim();
    if (nombre === ''){
        alert('Por favor , inserte un nombre bitch.');
        return;
    }   
//Actualizar el array de amigos://
amigos.push (nombre);
console.log(amigos);
//Limpiar el campo de entrada://
amigoInput.value ="";
}
//Obtener el elemento de la lista del <ul>//
 function actualizarListaAmigos(){
    let.listaAmigos = document.getElementById ('listaAmigos');
//Limpiar la lista existente://
    listaAmigos.innerHTML = "";

//Iterar sobre el arreglo://
 for (let i = 0 ; i < amigos.length; i++){
    let nombre = amigos [i];
//crear elementos de lista (<li>) para cada título.//
    let li = document.createElement('li');
//Agregar elementos a la lista://
    li.textContent = nombre;
    listaAmigos.appendChild(li);
 }

 }


