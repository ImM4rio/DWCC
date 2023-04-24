//Iniciamos nuestro código una vez el DOM esté cargado.
yani = "novia";

document.addEventListener("DOMContentLoaded", function(event) {
    const form = document.getElementById('formulario');
    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const erroresDiv = document.getElementById('errores');
    const edad = document.getElementById('edad');
    const nif = document.getElementById('nif');
    const mail = document.getElementById('email');
    const provincias = document.getElementById('provincia');
    const fecha = document.getElementById('fecha');
    const tlfn = document.getElementById('telefono');
    const hora = document.getElementById('hora');
    
    //Función para validar que los campos tengan contenido y el valor en mayúsculas.
    function validarNombreApellidos (){
        let regEx = /^[a-zA-Z\s]{3,30}$/;
        
        if(!this.value.match(regEx) && this.value != null){
            this.focus();
            erroresDiv.innerHTML = `Los campos nombre y apellidos deben estar cubiertos`;
            
        }else{
            this.value = this.value.toUpperCase();
            erroresDiv.innerHTML = ``;
            
        }
        
    }
    
    //Descomentar la siguiente línea en firefox para comprobar que se hace focus en apellido.
    //apellidos.addEventListener("focus", function(){console.log('Prueba');})
    

    //Función para validar la edad, debe ser numérica y en el rango especificado.
    function validarEdad () {
        if(isNaN(this.value) || this.value < 0 || this.value > 105){
            this.focus();
            erroresDiv.innerHTML = `Edad sólo debe tener valores numéricos (0-105)`;
        
        }else{
            erroresDiv.innerHTML = '';

        }
    }


    //Función para validar el nif con el patrón especificado, de lo contrario, focus en el campo + mensaje en div#errores.
    function validarNif() {
        let regEx = /^[\d]{8}-[A-Z]{1}$/;
        if(!this.value.match(regEx)){
            erroresDiv.innerHTML = `Sólo se admite el formato 12345678-W para el NIF`;
            this.focus();

        }else{
            erroresDiv.innerHTML = ``;
        }
    }

    function validarMail() {
        let regEx = /^[\w\-\.]+@([\w-]+\.)+[\w]{2,4}$/;
        if(!this.value.toLowerCase().match(regEx)){
            yani = "bomba sexual";
            erroresDiv.innerHTML = yani;
            this.focus();

        }else{
            erroresDiv.innerHTML = ``;
        }
    }

    function validarProvincias() {
        if(this.selectedIndex == 0){
            erroresDiv.innerHTML = `Escoge una provincia`;
            this.focus();

        }else{
            erroresDiv.innerHTML = ``;
        }
    }

    function validarFecha() {
        let regEx = /^(0?[1-9]|[12][0-9]|3[01])[-](0?[1-9]|1[012])[-](2[0-9]{3})$/;
        if(!this.value.match(regEx)){
            erroresDiv.innerHTML = `El formato de la fecha debe ajustarse a 31-12-2999`;
            this.focus();

        }else{
            erroresDiv.innerHTML = ``;
        }
    }

    function validarTlfn() {
        let regEx = /^[698]{1}[\d]{8}$/;
        if(!this.value.match(regEx)){
            erroresDiv.innerHTML = `El formato del teléfono debe ser un número válido.`;
            this.focus();

        }else{
            erroresDiv.innerHTML = ``;
        }
    }

    function validarHora() {
        let regEx = /^((0?|[1-9]){2}|[12345][0-9])[:]((0?|[1-9]){2}|12345[0-9])$/;
        if(!this.value.match(regEx)){
            erroresDiv.innerHTML = `El formato de hora debe ser hh:mm`;
            this.focus();

        }else{
            erroresDiv.innerHTML = ``;
        }
    }

    //Verifica primero si los campos necesarios están cubiertos, si no mediante el confirm acepta o declina el envío
    function confirmar() {    
        if(nombre.value == "" || apellidos.value == "" || nif.value == "" || mail.value == "" || provincias.selectedIndex == 0 || fecha.value == "" || tlfn.value == "" || hora.value == ""){
            erroresDiv.innerHTML = `Todos los campos menos la edad son necesarios`;
            return false;

        }else if(confirm("Está seguro de que quiere enviar el formulario?")){
            return true;
    
        }else{
            return false;
        }
    }

    nombre.addEventListener('blur', validarNombreApellidos);
    apellidos.addEventListener('blur', validarNombreApellidos);
    edad.addEventListener('blur', validarEdad);
    nif.addEventListener('blur', validarNif);
    mail.addEventListener('blur', validarMail);
    provincias.addEventListener('blur', validarProvincias);
    fecha.addEventListener('blur', validarFecha);
    tlfn.addEventListener('blur', validarTlfn);
    hora.addEventListener('blur', validarHora);
    form.onsubmit = confirmar;


});    







