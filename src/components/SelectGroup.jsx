// Importa los componentes necesarios
import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Define el componente Layout con el selector de grupos
const LayoutWithGroupsSelector = () => {
  // Lista de grupos
  const groups = ["Grupo A", "Grupo B", "Grupo C", "Grupo D", "Grupo E", "Grupo F", "Grupo G", "Grupo H"];

  return (
    <>
      <div className="mt-4 m-4">
        {window.innerWidth < 768 ? (
          <Carousel showStatus={false} showIndicators={false} infiniteLoop autoPlay>
            {groups.map((group, index) => (
              <a key={index} href={`/grupo-${group.toLowerCase().replace(" ", "-")}`}>
                <button className= "bg-blue-950 bg-blend-luminosity duration-1000 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                  {group}
                </button>
              </a>
            ))}
          </Carousel>
        ) : (
          // Renderizar botones individuales si la pantalla es grande
          <div className="flex justify-center">
            {groups.map((group, index) => (
              <a key={index} href={`/grupo-${group.toLowerCase().replace(" ", "-")}`}>
                <button className= "bg-blue-950 bg-blend-luminosity duration-1000 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                  {group}
                </button>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LayoutWithGroupsSelector;
