export const select = document.getElementById('paises');

import { RequestAPI } from './RequestAPI.js';

export class Interfaz{

    LlenarSelectPaises(paises){
        paises.paises.forEach(pais => {
            const option = document.createElement('option');
            option.value = pais.code;
            option.textContent = pais.name;
            select.appendChild(option);
        });
    }

    MostrarResultados(paisSeleccionado){
        const divResultado = document.getElementById('resultado');

        while(divResultado.firstChild){
            divResultado.removeChild(divResultado.firstChild);
        }

        const api = new RequestAPI();
        api.ConsultarPais(paisSeleccionado)
        .then(paises => {
            const {code,name,today,deaths,updated_at,latest_data, calculated } = paises.pais;
            let fechaConvertida = new Date(updated_at).toLocaleString();
            
            const ul = document.createElement('ul');
            ul.innerHTML = `<strong>Ultima Actualizacion: ${fechaConvertida}</strong>
                <li>Codigo: ${code}</li>
                <li>Pais: ${name}</li>
                <li>Casos Nuevos: ${today.confirmed}</li>
                <li>Muertes Nuevas: ${today.deaths}</li>
                <li>Total de Casos Confirmados: ${latest_data.confirmed}</li>
                <li>Total de Muertes Confirmadas: ${latest_data.deaths}</li>
                <li>Total de Personas Recuperadas: ${latest_data.recovered}</li>
                <li>Casos Criticos: ${latest_data.critical}</li>
                <li>Casos Por Millon: ${latest_data.calculated.cases_per_million_population}</li>
                <li>Porcentaje de Muerte: ${latest_data.calculated.death_rate.toFixed(2)}%</li>
               
            `;
            divResultado.appendChild(ul);
        });
    }
}
