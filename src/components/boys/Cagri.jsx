// Kişilik özelliklerini kaydettiğim objecti import ediyorum
import Personality from "../../Personality"
import { useState } from "react"

function Cagri() {
  const [battle, setBattle] = useState(false)
  const [info, setInfo] = useState(false)
  return (
    <div className="container-fluid">
      <div className="ourcards">
        <div className="cards">
          <h1 className="names">{Personality[1].name}</h1>

          <div className="our-img">
            <img
              className={battle | info ? "display-none" : "display-block"}
              id={Personality[1].imgId}
              src={Personality[1].imgSrc}
              alt="Çağrı Genç"
            />

            <div
              className={`about ${info && "display-block"}`}
              id={Personality[1].aboutId}
            >
              <h3>ÖZELLİKLER</h3>
              <p>{Personality[1].personalityOne}</p>
              <p>{Personality[1].personalityTwo}</p>
              <p>{Personality[1].personalityThree}</p>
              <p>{Personality[1].personalityFour}</p>
            </div>
            <div
              className={`battle ${battle && "display-block"}`}
              id={Personality[1].battleId}
            >
              <h3>YETENEKLER</h3>
              <div className="kahpelik">
                <p>{Personality[1].kahpelik}</p>
              </div>
              <div className="zeka">
                <p>{Personality[1].zeka}</p>
              </div>
              <div className="motosiklet">
                <p>{Personality[1].motosiklet}</p>
              </div>
              <div className="şans">
                <p>{Personality[1].sans}</p>
              </div>
            </div>
          </div>

          <div>
            <img
              onClick={() => {
                setBattle((prevState) => !prevState)
                setInfo(false)
              }}
              className="battle-img-first"
              src="images/battle.png"
              alt="battle"
            />
            <img
              onClick={() => {
                setInfo((prevState) => !prevState)
                setBattle(false)
              }}
              className="battle-img-second"
              src="images/man.png"
              alt="man"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cagri
