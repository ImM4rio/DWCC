document.addEventListener("DOMContentLoaded", function(event){

    //Creamos el div donde imprimiremos la información pedida.
    let primerDiv = document.getElementsByTagName('div')[0];
    let divInfo = document.createElement('div');
    divInfo.setAttribute("id", "info");
    primerDiv.appendChild(divInfo);

    //Número de párrafos
    let parrafos = document.getElementsByTagName('p');
    let texto = document.createElement('p');
    texto.appendChild(document.createTextNode(`En el html hay un total de ${parrafos.length} etiquetas <p>.`));
    divInfo.appendChild(texto);

    //Texto del párrafo 2.
    let parrafo2 = parrafos[1];
    let texto2 = document.createElement('p');
    texto2.appendChild(document.createTextNode(parrafo2.textContent));
    divInfo.appendChild(texto2);

    //Número de enlaces.
    let enlaces = document.getElementsByTagName('a');
    let texto3 = document.createElement('p');
    texto3.appendChild(document.createTextNode(`El documento tiene un total de ${enlaces.length} enlaces.`));
    divInfo.appendChild(texto3);

    //Dirección de la primera dirección.
    let texto4 = document.createElement('p');
    texto4.appendChild(document.createTextNode(`El atributo href del primer enlace del documento es ${enlaces[0].attributes["href"].nodeValue}`));
    divInfo.appendChild(texto4);

    //Dirección de la penúltima dirección.
    let texto5 = document.createElement('p');
    texto5.appendChild(document.createTextNode(`El atributo href del penúltimo enlace del documento es ${enlaces[(enlaces.length - 2)].attributes['href'].nodeValue}`));
    divInfo.appendChild(texto5);

    //Número de enlaces del primer párrafo.
    let texto6 = document.createElement('p');
    texto6.appendChild(document.createTextNode(`El primer párrafo tiene un total de ${parrafos[0].getElementsByTagName('a').length} enlaces.`));
    divInfo.appendChild(texto6);

})