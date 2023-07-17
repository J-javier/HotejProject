// Nav Bar component
import logo from "../../img/logo.svg";
import searchIcon from "../../img/search1.svg";
import "./NavBar.css";
import NavBarSecond from "./NavBarSecond";
import { useState } from "react";


function NavBar({handleChange}) {
  const [change, setChange] = useState(true);

  function ChangeStatus(){
    setChange(!change)
  }


  return (
    <>
    {change === true ? (<>
    <div className="ContenedorNav">
      <div className="ContenedorUno">
        <section className="SectionLogo">
          <div>
            <img src={logo} alt="Logo" />
          </div>
        </section>

        <section className="SectionSearch">
          <div className="contentSearch">
            <input className="city" placeholder="City" onChange={handleChange} />
            <input className="guest" placeholder="Add guest" />
            <div className="SearchImage">
              <img className="LogoSearch" src={searchIcon} alt="SearchLogo" onClick={ChangeStatus}/>
            </div>
          </div>
        </section>   
      </div>
    </div>

    </>): <NavBarSecond/> }

    </>
  );
}

export default NavBar;
