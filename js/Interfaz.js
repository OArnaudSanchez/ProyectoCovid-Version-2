export const select = document.getElementById('paises');

import { RequestAPI } from './RequestAPI.js';

export class Interfaz{

    LlenarSelectPaises(paises){
        paises.paises.forEach(pais => {
            const option = document.createElement('option');
            option.value = pais.country;
            option.textContent = pais.country;
            select.appendChild(option);
        });
    }

    MostrarResultados(paisSeleccionado){
        const divResultado = document.getElementById('resultado');

        //LImpiar los resultados anteriores
        while(divResultado.firstChild){
            divResultado.removeChild(divResultado.firstChild);
        }

        const api = new RequestAPI();
        api.ConsultarPais(paisSeleccionado)
        .then(paises => {
            //Destructuring al objeto
            const {country,active,cases,casesPerOneMillion,critical,deaths,deathsPerOneMillion,
            recovered,testsPerOneMillion,todayCases,todayDeaths,totalTests} = paises.pais;

            const ul = document.createElement('ul');
            ul.innerHTML = `
                <li>Pais: ${country}</li>
                <li>Casos Nuevos: ${todayCases}</li>
                <li>Muertes Nuevas: ${todayDeaths}</li>
                <li>Total de Casos Confirmados: ${cases}</li>
                <li>Total de Muertes Confirmadas: ${deaths}</li>
                <li>Total de Personas Recuperadas: ${recovered}</li>
                <li>Casos Criticos: ${critical}</li>
                <li>Total de Casos Activos: ${active}</li>
                <li>Casos Por Millon: ${casesPerOneMillion}</li>
                <li>Muertes por Millon: ${deathsPerOneMillion}</li>
                <li>Pruebas por millon: ${testsPerOneMillion}</li>
                <li>Total de pruebas realizadas: ${totalTests}</li>  

            `;
            divResultado.appendChild(ul);
        });
    }
}
