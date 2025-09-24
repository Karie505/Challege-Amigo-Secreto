let listaAmigos= []; //Array de la lista de amigos
const ulListaAmigos= document.getElementById("listaAmigos"); //lisa de amigos participantes
const inputAmigo = document.getElementById("amigo"); //caja donde se ingresa nombres
const ulResultado = document.getElementById ("resultado");  // amigo secreto

//función para agregar un amigo 
function agregarAmigo () {
//validar que el campo no esté vacío
    const nombreAmigo =inputAmigo.value.trim()
    
    if (!nombreAmigo) {
        alert ("Por favor ingrese un nombre valido");
        return;
    }
//// validar que no esté repetido el nombre
    if (listaAmigos.includes(nombreAmigo)) {
        alert ("Esta persona ya está dentro en el sorteo, ingresa a otra persona");
        return;
    }

    listaAmigos.push(nombreAmigo); // agregar el nombre al array
    actualizarLista ();
    inputAmigo.value= ""; // limpiar la caja una vez se ingresó un nombre

    
}

//actualizar lista de personas participando en el sorteo
function actualizarLista () {
    ulListaAmigo.innerHTML =""; //limpia la lista antes de actualizar

    listaAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;

//actualizar lista exibida
        
        const eliminar = document.createElement ("button");
        eliminar.textContent= "eliminar";
        eliminar.classList.add("buton-remove");
        eliminar.onclick = () => removerAmigo(index);

        item.appendChild(eliminar);
        ulListaAmigos.appendChild(item);
    });
    
}

//quitar amigo de la lista
function quitarAmigo(index) {
    ulListaAmigos.splice(index, 1);
    actualizarLista();
}


//botón sortear amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("ingrese al menos un amigo para jugar amigo secreto.");
        return;
    }


 
    const amigoSecreto= listaAmigos [Math.floor (Math.random()* listaAmigos.length)];
    ulResultado.innerHTML= `<li> Tu amigo amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

//limpiar la lista y mostrar amigo seccreto
function limparLista() {
    listaDeAmigos = [];
    actualizarLista();
    resultado.innerHTML = "";
}