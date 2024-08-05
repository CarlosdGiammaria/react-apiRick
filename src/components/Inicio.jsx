import { todoPersonajes } from "../functions/funciones";
import { useEffect, useState } from "react";
const Inicio = () => {
  const [personajes, setPersonajes] = useState(null)

  useEffect(() => {
    todoPersonajes(setPersonajes)
  }, [])
  return (
    <>
      {
        personajes != null ? (
          personajes.map(personaje => (
            <div key={personaje.id}>
              <a href={`/personaje/${personaje.id}`}><h1>{personaje.name}</h1></a>
              <img src={personaje.image} alt="foto-x" />
              <span>{personaje.status}</span>
            </div>

          ))) : ('no hay')
      }
    </>
  );
}

export default Inicio;