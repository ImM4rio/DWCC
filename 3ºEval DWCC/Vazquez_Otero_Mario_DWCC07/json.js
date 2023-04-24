$( () => {
    $.get("https://gorest.co.in/public/v2/users", (data) => {

    let respuesta = "<ul>";

    data.forEach(user => {

        respuesta += `<p><li>${user.id}`;
            respuesta += "<ul>";
                respuesta += `<li>${user.name}</li>`;
                respuesta += `<li>${user.email}</li>`;
                respuesta += `<li>${user.gender}</li>`;
                respuesta += `<li>${user.status}</li>`;
            respuesta += "</ul>";
        respuesta += "</li></p>";
        
    });

    respuesta += '<(ul>'

    $('#resultados').append(respuesta);

    }, "json");
})