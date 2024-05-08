interface Serie {
    idserie: string;
    Nombredelaserie: string;
    Clasificacion: string;
  }
  
  interface Personaje {
    idpersonaje: string;
    Nombrepersonaje: string;
    Añosdeexperiencia: string;
  }
  
  interface Asignacion {
    idasignacion: string;
    serie: Serie;
    personaje: Personaje;
    papel: string;
    Tipodepapel: string;
    fechainicio: string;
    fechafin: string;
    temporadas: number;
  }
const serie = [
    {
        idserie: "1",
        Nombredelaserie: "Adventure Show",
        Clasificacion: "CIencia ficcion"
    },
    {
        idserie: "2",
        Nombredelaserie: "Mystery Theater",
        Clasificacion: "Misterio" 
    },
    {
        idserie: "3",
        Nombredelaserie: "Comedy Central",
        Clasificacion: "Comedia" 
    },
    {
        idserie: "4",
        Nombredelaserie: "Horror Night",
        Clasificacion: "Terror" 
    },
    {
        idserie: "5",
        Nombredelaserie: "Futurama",
        Clasificacion: "Comedia" 
    }
];

const personaje = [
    {
        idpersonaje: "1",
        Nombrepersonaje: "Finn",
        Añosdeexperiencia: "5",

    },
    {
        idpersonaje: "2",
        Nombrepersonaje: "Chris",
        Añosdeexperiencia: "6",
    },
    {
        idpersonaje: "3",
        Nombrepersonaje: "Pablo",
        Añosdeexperiencia: "2",
    },
    {
        idpersonaje: "4",
        Nombrepersonaje: "Troy",
        Añosdeexperiencia: "10",
    },
    {
        idpersonaje: "5",
        Nombrepersonaje: "Bart",
        Añosdeexperiencia: "6",
    }
];

const asignacion =[
    {
        idasignacion: "1",
        serie:{
            idserie:"1",
            Nombredelaserie:"Adventure Show"
        },
        personaje:{
            idpersonaje:"1",
            Nombrepersonaje:"Finn",
        },
        papel:"luchador",
        Tipodepapel:"principal",
        fechainicio:"13 de mayo del 2010",
        fechafin:"20 de junio del 2020",
        temporadas: 10,
    },
    {
        idasignacion: "2",
        serie:{
            idserie:"2",
            Nombredelaserie:"Mystery Theater"
        },
        personaje:{
            idpersonaje:"2",
            Nombrepersonaje:"Chris",
        },
        papel:"detective",
        Tipodepapel:"secundario",
        fechainicio:"15 de marzo del 2015",
        fechafin:"20 de diciembre del 2020",
        temporadas: 6,
    },
    {
        idasignacion: "3",
        serie:{
            idserie:"3",
            Nombredelaserie:"Comedy Central"
        },
        personaje:{
            idpersonaje:"3",
            Nombrepersonaje:"Pablo",
        },
        papel:"comediante",
        Tipodepapel:"principal",
        fechainicio:"1 de enero del 2018",
        fechafin:"31 de diciembre del 2021",
        temporadas: 4,
    },
    {
        idasignacion: "4",
        serie:{
            idserie:"4",
            Nombredelaserie:"Horror Night"
        },
        personaje:{
            idpersonaje:"4",
            Nombrepersonaje:"Troy",
        },
        papel:"víctima",
        Tipodepapel:"secundario",
        fechainicio:"31 de octubre del 2019",
        fechafin:"31 de octubre del 2022",
        temporadas: 3,
    },
    {
        idasignacion: "5",
        serie:{
            idserie:"5",
            Nombredelaserie:"Futurama"
        },
        personaje:{
            idpersonaje:"5",
            Nombrepersonaje:"Bart",
        },
        papel:"protagonista",
        Tipodepapel:"principal",
        fechainicio:"1 de enero del 2000",
        fechafin:"31 de diciembre del 2010",
        temporadas: 11,
    }
];

function eliminarAsignacionPorId(asignaciones: any[], id: string, callback: (asignacion: any) => void) {
    const index = asignaciones.findIndex(asignacion => asignacion.idasignacion === id);
    if (index !== -1) {
      let asignacionEliminada = asignaciones.splice(index, 1)[0];
      callback(asignacionEliminada);
    }
  }
  
  // Uso de la función con un callback que imprime el elemento eliminado
  eliminarAsignacionPorId(asignacion, "1", (asignacionEliminada) => {
    console.log("Asignación eliminada:", asignacionEliminada);
  });
  

  
//definimos la interfaz para tipar la respuesta
interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
}

// Luego, utilizamos fetch para hacer la solicitud a la API
fetch('https://api.coingecko.com/api/v3/coins/list')
  .then((response: Response) => {
    if (!response.ok) {
      throw new Error('Network response failed');
    }
    return response.json();
  })
  .then((data: CryptoCurrency[]) => {
    const crypto = data[0];
    console.log("Información de la criptomoneda (Fetch con Promises):");
    console.log("ID: " + crypto.id);
    console.log("Símbolo: " + crypto.symbol);
    console.log("Nombre: " + crypto.name);
  })
  .catch((error: Error) => {
    console.error('Fetch error:', error);
  });

// async/await
async function getCryptoAsync(): Promise<void> {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const crypto = data[0];
    console.log("Información de la criptomoneda (Async/await):");
    console.log("ID: " + crypto.id);
    console.log("Símbolo: " + crypto.symbol);
    console.log("Nombre: " + crypto.name);
  } catch (error) {
    console.error('Async/await error:', error);
  }
}

getCryptoAsync();

  
