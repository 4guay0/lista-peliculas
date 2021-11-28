//Importar los recursos y componentes a utilizar 
import React, { useState } from "react";
import ComponenteInput from "./componentes/ComponenteInput";
import Pelicula from "./componentes/Pelicula";
import "./App.css";

function App() {
  //Crear las lista de peliculas
  const [listaPeliculas, cambiarListaPeliculas] = useState([{}]);
  
  //Crear la funcion de borrar y pasarle el parametro de id del elemento a borrar
  const borrar = (id) => {
    const listaFiltrada = listaPeliculas.filter((e, index) => index !== id);
    cambiarListaPeliculas(listaFiltrada);
  }
  //Crear la funcion submit que permite visualizar la lista de peliculas despues de guardar una nueva pelicula 
  const submit = (event) => {
    event.preventDefault();
    const pelicula = {
      nombre: document.getElementById("nombre").value,
      genero: document.getElementById("genero").value,
      descripcion: document.getElementById("descripcion").value,
    };
    cambiarListaPeliculas([pelicula, ...listaPeliculas]);
    console.log(listaPeliculas);
  };
  //Lo que se visualiza en la pagina web
  return (
    <div className="App">
      <h1>Registro de Películas</h1>
      <div className="contenido">
        <div className="contenedor formulario">
          <h2>Películas Formulario</h2>
          <form className="form" autocomplete="off" onSubmit={submit}>
            <div class="elemento">
              <ComponenteInput
                etiqueta="Nombre de la pelicula"
                nombre="nombre"
                tipo="text"
              />
            </div>
            <div className="elemento">
              <ComponenteInput etiqueta="Genero" nombre="genero" tipo="text" />
            </div>
            <div className="elemento">
              <ComponenteInput
                etiqueta="Descripción"
                nombre="descripcion"
                tipo="text"
              />
            </div>
            <button className="boton">Guardar</button>
          </form>
        </div>
        <div className="contenedor registro">
          <h2>Peliculas Lista #{listaPeliculas.length}</h2>
          <div className="registro">
            {listaPeliculas.map((e, index) => (
              <Pelicula 
                pelicula={e} 
                borrar={borrar}
                id={index}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
