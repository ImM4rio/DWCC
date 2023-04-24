document.addEventListener('DOMContentLoaded', function(event){

    let anadirBtn = document.getElementById("anadirBtn");
    let borrarUltimoBtn = document.getElementById("borrarUltimoBtn");
    let borrarPrimeroBtn = document.getElementById("borrarPrimeroBtn");
    let listaDesordenada = document.getElementById("listaDesordenada");
    let coleccionLista = document.getElementsByTagName("li");

    anadirBtn.addEventListener('click', anadirNuevo);
    borrarUltimoBtn.addEventListener('click', borrarUltimo);
    borrarPrimeroBtn.addEventListener('click', borrarPrimero);
    
    
    //Método para añadir un nuevo elemento a la lista.
    function anadirNuevo() {

        let textoEntrada = prompt("Introduzca un elemento para la lista y pulse aceptar");

        //Creamos el nuevo elemento de tipo <li>
        let nuevaEntrada = document.createElement("li");

        //Añadimos a este nuevo elemento el nodo de texto que inorporará entre etiquetas.
        nuevaEntrada.appendChild(document.createTextNode(textoEntrada));

        //Añadimos a la listaDesordenada <ul> el hijo creado en los pasos anteriores.
        listaDesordenada.appendChild(nuevaEntrada);

    }

    function borrarPrimero() {
        listaDesordenada.removeChild(coleccionLista[0]);

    }

    function borrarUltimo() {
        listaDesordenada.removeChild(coleccionLista[(coleccionLista.length - 1)]);
    }
})