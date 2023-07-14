import "./Card.css";
import Star from "../../img/star-fill.svg";

import { useState, useEffect } from "react";

function Card() {
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="ContPrin">
      <section className="SectionTitle">
        <h2>Stays in Finland</h2>
        <p>12+ stays</p>
      </section>
      <section className="card">
        {data.map((inf, i) => {
          return (
            <>
              <div key={i} className="ContCard">
                <div className="ContImg">
                  <img src={inf.photo} alt="Room Image" />
                </div>
                <div className="ContInf">
                  <div className="Information">
                    { inf.superHost ? (<><span className="super">SUPER HOST</span>
                      <div>
                          <span className="apartment">{inf.type}</span> 
                          { inf.beds ? (<span className="apartment"> . {inf.beds} beds</span> ): ""}
                      </div>
                    </> ) : (<>                      
                        <span className="apartment">{inf.type}</span> 
                        { inf.beds ? (<span className="apartment"> {inf.beds} beds</span> ): ""}
                    
                    </>)}
                    <div className="recomendacion">
                      <img src={Star} alt="Rate" />
                      <span className="rate">{inf.rating}</span>
                    </div>
                  </div>
                    <p className="parrafo"> {inf.title}</p>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
}

export default Card;
