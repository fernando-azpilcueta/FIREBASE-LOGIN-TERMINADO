import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {auth} from "./app/firebase.js";

import './app/crearCuenta.js'
import './app/iniciarSesion.js'
import './app/cerrarSesion.js'
import {verificarSesion} from './app/verificarSesion.js'
import {mostrarContenidoVacio} from './app/mostrarContenido.js';
import {mostrarContenido} from './app/mostrarContenido.js';

auth.onAuthStateChanged(async function(user) {
    if (user) {
        verificarSesion(user);
        console.log("sesion iniciada")
        try {     
           
            mostrarContenido(); 
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("sin sesion")
        
        mostrarContenidoVacio();
        verificarSesion(user);
    }
});






