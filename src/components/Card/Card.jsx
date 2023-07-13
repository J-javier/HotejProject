import "./Card.css"
import Star from "../../img/star-fill.svg"

function Card() {
  return (
    <div className="ContPrin">
        <section className="SectionTitle">
          <h2>Stays in Finland</h2>
          <p>12+ stays</p>
        </section>
        <section className="card">
          <div className="ContCard">
            <div className="ContImg">
              <img src="#" alt="Room Image" />
            </div>
            <div className="ContInf">
              <div className="Information">
                <span className="super">SUPER HOST</span>
                <span>Entired apartment</span>
                <span>2 beds</span>
                <div>
                  <img src={Star} alt="" />
                </div>
                <span>4.50</span>
              </div>
              <p>Stylist apartment in center of the city</p>
            </div>
          </div>
        </section>



        
    </div>
  )
}

export default Card
