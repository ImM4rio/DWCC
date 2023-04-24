let peticion;

const iniciar = () => {
    peticion = new XMLHttpRequest();
    peticion.open('GET', 'https://gorest.co.in/public/v2/users');
    peticion.send();
    peticion.addEventListener('load', cargada);

}

const cargada = () => {
    let respuesta = ``;
    let usuarios = JSON.parse(peticion.responseText);
    usuarios.forEach(user => {
        respuesta += `<ul>`;
            respuesta += `<li>id: ${user.id}</li>`;
            respuesta += `<li>id: ${user.name}</li>`;
            respuesta += `<li>id: ${user.email}</li>`;
            respuesta += `<li>id: ${user.gender}</li>`;
            respuesta += `<li>id: ${user.status}</li>`;
        respuesta += `</ul>`;
    });

    


    document.getElementById('resultados').innerHTML = respuesta;
}

window.addEventListener('load', iniciar, false);