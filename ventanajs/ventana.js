const inicializar = () => {
    document.getElementById("crear").onclick = crearNueva;
    document.getElementById("cerrar").onclick = cerrarNueva;
    document.getElementById("todo").onclick = cerrarTodo;
    document.getElementById("moveBy").onclick = moverBy;
    document.getElementById("moveTo").onclick = moverTo;
    document.onclick = foco;
    document.getElementById("aumentar").onclick = aumentar;
    document.getElementById("redimensionar").onclick = redimensionar;
    document.getElementById("aniversarioBtn").onclick = aniversario;
    document.getElementById("formatoFechaBtn").onclick = formatoFecha;
    document.getElementById("formatoHoraBtn").onclick = formatoHora;
    document.getElementById("calcularBase").onclick = baseExp;
    document.getElementById("sqrtBtn").onclick = sqrt;
    document.getElementById("redondearBtn").onclick = round;
    document.getElementById("senoBtn").onclick = seno;
    document.getElementById("cosenoBtn").onclick = coseno;
    document.getElementById("tangenteBtn").onclick = tangente;


}

//Objeto WINDOW

let nuevaVentana;

const crearNueva = () => {
    nuevaVentana = window.open("nueva.html", "nueva", height="200px", widht="200px" );

}

const cerrarTodo = () => {
    window.close(); 
    nuevaVentana = null;

}

const cerrarNueva = () => {
    if(nuevaVentana) {
    nuevaVentana = nuevaVentana.close(); nuevaVentana = null;

    }else{
        window.alert("ERROR: no hay ninguna pestaña nueva abierta.");
    }
}

const datos = () => {
    this.event.preventDefault();

    let ul = document.getElementById("URL");


    let url = window.location;
    let protocol = window.location.protocol;
    let navegador = window.navigator.appName;
    let javaActivo = window.navigator.javaEnabled();

    let resultado =
        `<li>${url}</li>
        <li>${protocol}</li>
        <li>${navegador}</li>
        <li>${javaActivo}</li>`;

    ul.innerHTML = resultado;
}

const moverTo = () => {
    if(nuevaVentana) {
        nuevaVentana.moveTo(350, 900);

    }else{
        alert("No se puede mover la ventana nueva porque no está abierta.")

    }
}

const moverBy = () => {
    if(nuevaVentana) {
        nuevaVentana.moveBy(350, -90);

    }else{
        alert("No se puede mover la ventana nueva porque no está abierta.")
    }
}

const foco = () => {
    if(nuevaVentana) {
        nuevaVentana.focus();
    }
}

const aumentar = () => {
    if(nuevaVentana) {
        nuevaVentana.resizeBy(50, 50);

    }else{
        alert("La ventana no se puede aumentar de tamaño porque no está abierta.");
    }
}

const redimensionar = () => {
    if(nuevaVentana){
        nuevaVentana.resizeTo(500, 500);
        
        
    }else{
        alert("La ventana no se puede aumentar de tamaño porque no está abierta.");        
    }
}

//Objeto DATE

const diasRestantes = () => {
    this.event.preventDefault();

    let diasRestantes = document.getElementById("diasRestantes");


    let fechaActual = new Date();
    let fechaFinal = new Date(2022, 05, 25);
    let diasFaltan = fechaFinal - fechaActual;
        diasFaltan = Math.ceil(diasFaltan / (1000 * 60 * 60 * 24));

    diasRestantes.innerHTML = 
        `<tr>
            <td>Días que faltan hasta el 25 de Junio: </td>
            <td>${diasFaltan} días</td>
        </tr>`;

}

const aniversario = () => {

    let fechaHTML = document.getElementById("aniversario"); //Fecha input
    let tr = document.getElementById("resultados");

    fecha = fechaHTML.value; //Valor del input

    let anho = new Date().getFullYear(); //Año actual.

    let cadena = "";
    

    for(let i = anho; i <= 2100; i++){
        let fechaCumple = new Date(i, (fecha.split("/")[0] - 1), fecha.split("/")[1]);

        if(fechaCumple.getDay() == 0 || fechaCumple.getDay() == 6){
            let dia = fechaCumple.getDay();

            if(dia == 6){
                dia = "Sábado";
            }else{
                dia = "Domingo";
            }
            cadena +=            
                `<tr>
                    <td>El año ${i} cae a día ${dia}</td>
                </tr>`;
        }

    }
    
    tr.innerHTML = cadena;

}

const formatoFecha = () => {
    let formatoFechaBtn = document.getElementById("resultados");

    let formato = document.getElementById("formatoFecha");
    let numFormato = formato.value;

    //Formatos de fecha según el input 1: 17/02/201 2: Mércores, 17 de febreiro de 2016 3:  Wednesday, February 17, 2016

    let fechaActual = new Date();
    let diaSemana = fechaActual.getDay();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1;
    let year = fechaActual.getFullYear();

    if(numFormato == 1){
        formatoFechaBtn.innerHTML = `${dia}/${mes}/${year}`;

    }else if(numFormato ==2){
        
        if(diaSemana == 1){
            diaSemana = 'Luns';
        }else if(diaSemana == 2){
            diaSemana = 'Martes';
        }else if(diaSemana == 3){
            diaSemana = 'Mércores';
        }else if(diaSemana == 4) {
            diaSemana = 'Xoves';
        }else if(diaSemana == 5) {
            diaSemana = 'Venres';
        }else if(diaSemana == 6) {
            diaSemana = 'Sábado';
        }else{
            diaSemana = 'Domingo';
        }

        if(mes == 1){
            mes = 'Xaneiro';
        }else if(mes == 2){
            mes ='Febreiro';
        }else if(mes == 3){
            mes ='Marzo';
        }else if(mes == 4){
            mes ='Abril';
        }else if(mes == 5){
            mes ='Maio';
        }else if(mes == 6){
            mes ='Xuño';
        }else if(mes == 7){
            mes ='Xullo';
        }else if(mes == 8){
            mes ='Agosto';
        }else if(mes == 9){
            mes ='Setembro';
        }else if(mes == 10){
            mes ='Outubro';
        }else if(mes == 11){
            mes ='Novembro';
        }else{
            mes = 'Decembro';
        }

        formatoFechaBtn.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${year}`;

    }else{
        let formato2 = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
        formatoFechaBtn.innerHTML = `${fechaActual.toLocaleDateString("en-US", formato2)}`;
    }
}

const formatoHora = () => {
    let formato = document.getElementById("formatoHora").value;

    let resultado = document.getElementById("resultados");

    let fecha = new Date();
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    let sec = fecha.getSeconds();

    let pmAm = (hora > 12) ? 'PM' : 'AM';

    if(formato == 1){
        resultado.innerHTML = `${hora}:${min}:${sec}`;

    }else{
        hora = hora % 12;
        resultado.innerHTML = hora + ":" + min + " " + pmAm;
    }


}

//Objeto MATH

const baseExp = () => {
    let resultado = document.getElementById("resultados");

    let base = document.getElementById("base").value;
    let exp = document.getElementById("exponente").value;

    if(base == null || base ==""){
        alert('Rellena el campo Base');

    }else if(exp == null || exp ==""){
        alert('Rellena el campo Exponente');

    }else{
        let calculo = Math.pow(base, exp);
        resultado.innerHTML = "El resultado es = " + calculo;
    }
}

const sqrt = () => {
    let resultado = document.getElementById("resultados");

    let sqrt = document.getElementById("sqrt").value;

    sqrt = sqrt > 0 ? resultado.innerHTML = "La raíz cuadrada es = " + Math.sqrt(sqrt) : alert('Introduce un valor positivo');
    

}

const round = () => {
    let resultado = document.getElementById("resultados");

    resultado.innerHTML = "El número más próximo es " + Math.round(document.getElementById("redondeo").value);


}


//seno coseno tangente.


function seno () {
    let resultados = document.getElementById("resultados");
    resultados.innerHTML = "El seno es = " + Math.sin(document.getElementById("trigonometria").value);
    
}

function coseno () {
    let resultados = document.getElementById("resultados");
    resultados.innerHTML = "El coseno es = " + Math.cos(document.getElementById("trigonometria").value);

}

function tangente () {
    let resultados = document.getElementById("resultados");
    resultados.innerHTML = "La tangente es = " + Math.tan(document.getElementById("trigonometria").value);
}


const mayor = () => {
    this.event.preventDefault();
    let resultado = document.getElementById("mayorArray");
    let lista = [1, 5, 3, 4, 9, 6, 7, 2, 8, 0];
    lista.sort();
    resultado.innerHTML = "Array ordenado = " + lista;
}

//Clase String

const cadena = () => {
    let texto = document.getElementById("nombre").value;
    let resultados = document.getElementById("resultados");

    const size = document.getElementById("tamanhoBtn");
    size.addEventListener("click", () => {
        resultados.innerHTML = "Tú nombre tienen un total de " + texto.length + " caracteres incluyendo los espacios.";
    })

    const sizeEsp = document.getElementById("tamanhoSinBtn");
    sizeEsp.addEventListener("click", () => {
        textoEsp = texto.replaceAll(" ", "");        
        resultados.innerHTML = "Tú nombre tienen un total de " + textoEsp.length + " caracteres excluyendo los espacios.";
 
    })

    const minus = document.getElementById("minusculasBtn");
    minus.addEventListener("click", () => {
        textoMin = texto.toLowerCase();
        resultados.innerHTML = "Tú nombre en minúsculas " + textoMin;

    })

    const mayus = document.getElementById("mayusculasBtn");
    mayus.addEventListener("click", () => {
        textoMay = texto.toUpperCase();
        resultados.innerHTML = "Tú nombre en minúsculas " + textoMay;

    })

    const separado = document.getElementById("separadoBtn");
    separado.addEventListener("click", () => {
        let resultado = "";
        textoSep = texto.split(" ");
        resultado = textoSep[0] + ", ";

        for(let i = 1; i < textoSep.length; i++){
            resultado += textoSep[i] + " ";
        }

        resultados.innerHTML = resultado;
        
    })

    const especial = document.getElementById("especialBtn");
    especial.addEventListener("click", () => {
        let resultado = "";
        let textoEspecial = texto.split(" ");
        resultado = textoEspecial[0].toLowerCase();
        for(let i = 1; i < textoEspecial.length; i++){
            resultado += textoEspecial[i][0].toUpperCase();
        }
        resultados.innerHTML = resultado;
    })
    
}
