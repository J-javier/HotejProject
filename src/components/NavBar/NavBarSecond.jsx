import "./NavBarSecond.css";
import lupa from "../../img/search2.svg"

function NavBarSecond() {
  return (
    <div className="MainCont">

      <div className="ContOne">
        <section className="SectionSearch">
          <div className="SearchCont">
            <div className="ciudad">
                <input  placeholder="Helsinki, Finland"/>
            </div>
            <div className="invitados">
                <input  placeholder="Add guest"/>
            </div>
            <div className="ImagenBusqueda">
                <div className="contImg">
                    <img className="LogoSearch" src={lupa} alt="SearchLogo" />
                    <span>Search</span>
                </div>
            </div>
          </div>
        </section>   
      </div>

      <div className="Contenedor2">
      </div>
    </div>
  );
}

export default NavBarSecond;
