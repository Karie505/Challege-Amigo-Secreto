
const inputAmigo = document.getElementById("amigo");
const listaAmigos= []; //Array de la lista de amigos
const ulListaAmigos= document.getElementById("listaAmigos");
const ulResultado = document.getElementById ("resultado"); 

//función para agregar un amigo
//campo de texto
//Botón
function agregarAmigo () {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value} </li>`;

    //validar que el campo no esté vacío
    //// validar que no esté repetido el nombre
}

//botón sortear amigo
function sortearAmigo() {
    const aleatorio = Math.floor (Math.random()* listaAmigos.length);
    const amigoSecreto= listaAmigos [aleatorio];
    ulResultado.innerHTML= `<li> Tu amigo amigo secreto es: ${amigoSecreto} </li>`;
}