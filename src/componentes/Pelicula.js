//Importar los recursos y componentes a utilizar
import React, { useState } from "react";
import "../App.css";

const Pelicula = (props) => {
   //Crear los estados para la edicion de peliculas
   const [modoEditar, cambiarModoEditar] = useState(false);
   //Crear la funcion de editar
   const editar = () => {
      cambiarModoEditar(true);
   }
   //Crear la funcion de borrar pelicula
   const borrarPelicula = () => {
      props.borrar(props.id);
   }
   //Elemento que se visualiza en la pagina web
   return (
      <div>
         { !modoEditar?(
            <div className="pelicula">
                  <div className="contenidoPeli">
                     <span className="nombre">{props.pelicula.nombre}</span>
                     <span className="genero">Genero: {props.pelicula.genero}</span>
                     
                  </div>

                  <div className="descripcion">
                  
                     Descripción: {props.pelicula.descripcion}
                     <br/> <br/>
                     
                     
                  </div>
                  <div className="botonesControl">
                     <span onClick={editar}>Editar</span><span onClick={borrarPelicula}>Borrar</span>
                  </div>
               </div>
         ):(
            <div className="pelicula">
                  
            </div>
         )
               
          }     
      </div>
   )
}
//Exportar el elemento de pelicula con el formato necesario 
export default Pelicula;
