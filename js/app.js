import { RequestAPI } from './RequestAPI.js';
import { Interfaz, select } from './Interfaz.js';

const ui = new Interfaz();
const api = new RequestAPI();

const formulario = document.getElementById('generar-resultados');
formulario.addEventListener('DOMContentLoaded',api.ObtenerPaisesSelect().
then(paises => ui.LlenarSelectPaises(paises)));

document.addEventListener('submit', (e)=>{
    e.preventDefault();

   const paisSeleccionado =  select.options[select.selectedIndex].value;
    
    if(paisSeleccionado === '' || paisSeleccionado.length == 0){
        alert('Debe seleccionar un Pais');
    }
    else{
        ui.MostrarResultados(paisSeleccionado);
    }
});
