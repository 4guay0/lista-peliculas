//Importar los recursos y componentes a utilizar
import React, {useState} from "react";
import '../App.css';

//Crear el elemento y los parametro que necesita de entrada
const ComponenteInput = ({tipo, etiqueta, nombre}) => {
   //Crear la funcion que permite capturar los datos 
   const [dato, cambiarDato] = useState("");
   
   const manejoDatos = (event) => {
      cambiarDato(event.target.value);
   }
    //Elemento que se visualiza en la pagina web
   return(
      <div>
         <label for={nombre}>{etiqueta}</label><br/>
         <input type={tipo} id={nombre} value={dato} onChange={manejoDatos} required="true"></input>
      </div>
   )
}
//Exportar el elemento de input con el formato necesario 
export default ComponenteInput;

