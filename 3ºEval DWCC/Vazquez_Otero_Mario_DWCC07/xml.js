$( () => {
    $.get('http://api.nbp.pl/api/exchangerates/rates/c/usd/last/10/?format=xml', (data) => {
        
        let respuesta = "";
        respuesta += `<ul><h1>ExchangeRatesSeries</h1>`;
            respuesta += `<li>Table: ${$(data).find('Table').text()}</li>`;
            respuesta += `<li>Currency: ${$(data).find('Currency').text()}</li>`;
            respuesta += `<li>Code: ${$(data).find('Code').text()}</li>`;
            
            $(data).find('Rate').each(function (){
                respuesta += `<ul><b>Rate:</b> `;
                respuesta += `<li>No: ${$(this).find('No').text()}</li>`;
                respuesta += `<li>EffectiveDate: ${$(this).find('EffectiveDate').text()}</li>`;
                respuesta += `<li>Bid: ${$(this).find('Bid').text()}</li>`;
                respuesta += `<li>Ask: ${$(this).find('Ask').text()}</li>`;
                respuesta += '</ul>';
                
            })
            respuesta += '</ul>';


        $('#resultados').append(respuesta);

    })
})

/**
        let peticion = new XMLHttpRequest();
        peticion.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200){
                cargada(this);
            }
        }

        peticion.open("GET", "http://api.nbp.pl/api/exchangerates/rates/c/usd/last/10/?format=xml");
        peticion.send();

        function cargada(xml) {
            let respuesta = '';
            let xmlDoc = xml.responseXML;
            let exchangerates = xmlDoc.getElementsByTagName('ExchangeRatesSeries');

            respuesta += exchangerates[0].getElementsByTagName('Table')[0].childNodes[0].nodeValue;
            respuesta += '<br>';
            respuesta += exchangerates[0].getElementsByTagName('Currency')[0].childNodes[0].nodeValue;
            respuesta += '<br>';
            respuesta += exchangerates[0].getElementsByTagName('Code')[0].childNodes[0].nodeValue;
            respuesta += '<br>';
            let rates = exchangerates[0].getElementsByTagName('Rates')[0].getElementsByTagName('Rate');
            for (let i = 0; i < rates.length; i++) {

                respuesta += rates[i].getElementsByTagName('No')[0].childNodes[0].nodeValue;
                respuesta += '<br>';
                respuesta += rates[i].getElementsByTagName('EffectiveDate')[0].childNodes[0].nodeValue;
                respuesta += '<br>';
                respuesta += rates[i].getElementsByTagName('Bid')[0].childNodes[0].nodeValue;
                respuesta += '<br>';
                respuesta += rates[i].getElementsByTagName('Ask')[0].childNodes[0].nodeValue;
                respuesta += '<br>';

            }

            $('#resultados').append(respuesta);
        }

                let peticion = new XMLHttpRequest();
        peticion.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200) {
                cargada(this);
            }
        }

        peticion.open('GET', 'https://gorest.co.in/public/v2/users', true);
        peticion.send();

        function cargada(json) {
            let respuesta = '';

            let jsonDoc = json.responseText;
            let datos = eval(jsonDoc);

            datos.forEach(usuario => {
                respuesta += '<p>';
                    respuesta += `id = ${usuario.id}`;
                    respuesta += `name = ${usuario.name}`;
                    respuesta += `email = ${usuario.email}`;
                    respuesta += `género = ${usuario.gender}`;
                    respuesta += `status = ${usuario.status}`;
                respuesta += '</p>';
            });


            $('#resultados').append(respuesta);
        }
 */