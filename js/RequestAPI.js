export class RequestAPI{   
    constructor(){
        this.url = `https://coronavirus-19-api.herokuapp.com/countries/`;
    }

    async ObtenerPaisesSelect(){
        const request = await fetch(this.url);

        const paises = await request.json();

        return {
            paises
        }
    }

    async ConsultarPais(paisSeleccionado){
        this.url += `${paisSeleccionado}`;

        const request = await fetch(this.url);

        const pais = await request.json();
        
        return {
            pais
        }
    }
} 