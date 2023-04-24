window.onload = function() {

    document.forms["formulario"].elements["nombre"].addEventListener('blur',() => {
    
    document.getElementById('nombre').value = document.getElementById('nombre').value.toUpperCase();
    
     });
    
    document.forms["formulario"].elements["apellidos"].addEventListener('blur',() => {
    
    document.getElementById('nombre').value = document.getElementById('nombre').value.toUpperCase();
    
    
    
     });
    
     
    
    };
    