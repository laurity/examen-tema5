/**
 * @author Laura López Alonso
 * @github https://github.com/laurity/examen-tema5
 */

const id = (id) => { return document.getElementById(id)}

let mensajeError = [];

const validar = e =>{
    e.preventDefault();
    mensajeError = [];

    id("nombre").value.trim().length === 0 ? mensajeError.push("Debe de insertar un nombre") : null
    
    !/^[A-Z]{1}[a-zA-Z]*$/.test(id("nombre").value.trim()) ? mensajeError.push("Debe de insertar mayúscula al princio y caractéres válidos") : null

    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(id("correo").value.trim()) ? mensajeError.push("Debe de insertar un correo electrónico correcto") : null

    //Faltan los checked

    id("mensje").value.trim().length
}

