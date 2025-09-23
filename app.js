
const inputAmigo = document.getElementById("amigo");
const listaAmigos= []; 
const ulListaAmigos= document.getElementById("listaAmigos");
const ulResultado = document.getElementById ("resultado"); 

function agregarAmigo () {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value} </li>`;
}

function sortearAmigo () {
    const aleatorio = Math.floor (Math.random()* listaAmigos.length);
    const amigoSecreto= listaAmigos [aleatorio];
    ulResultado.innerHTML= `<li> Tu amigo amigo secreto es: ${amigoSecreto} </li>`;
}