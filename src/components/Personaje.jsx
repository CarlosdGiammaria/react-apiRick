import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../functions/funciones";
import { useEffect, useState } from "react";

function Personaje() {
  const [personaje, setPersonaje] = useState(null)
  const params = useParams()
  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje)
  }, [])
  return (
    <>
      {
        personaje != null ? (
          <div>
            <h1>Personaje numero de id {params.id}</h1>
            <p>nombre {personaje.name}</p>
            <img src={personaje.image} alt="" />
          </div>
        ) : ('no hay')

      }
    </>
  );
}

/* https://www.youtube.com/watch?v=WB0UcVdNAoA */

export default Personaje;