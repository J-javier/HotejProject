// Nav Bar component
import logo from "../../img/logo.svg";
import searchIcon from "../../img/search1.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="ContenedorNav">
      <div className="ContenedorUno">
        <section className="SectionLogo">
          <div>
            <img src={logo} alt="Logo" />
          </div>
        </section>

        <section className="SectionSearch">
          <div className="contentSearch">
            <input className="city" placeholder="Helsinki, Finland"/>
            <input className="guest" placeholder="Add guest"/>
            <div className="SearchImage">
              <img className="LogoSearch" src={searchIcon} alt="SearchLogo" />
            </div>
          </div>
        </section>

      </div>
      <div className="Contenedor2">

      </div>
    </div>
  );
}

export default NavBar;
