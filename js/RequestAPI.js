export class RequestAPI{   
    constructor(){
        this.url = `https://corona-api.com/countries`;
    }

    async ObtenerPaisesSelect(){
        const request = await fetch(this.url);

        const data = await request.json();
        const paises = data.data;
    
        return {
            paises
        }
    }

    async ConsultarPais(paisSeleccionado){
        const request = await fetch(`${this.url}/${paisSeleccionado}`);
        const data = await request.json();
        const pais = data.data;
        
        return {
            pais
        }
    }
} 