// Kişilik özelliklerini kaydettiğim objecti import ediyorum
import Personality from "../../Personality"
import { useState } from "react"

function Yasir() {
  const [battle, setBattle] = useState(false)
  const [info, setInfo] = useState(false)
  return (
    <div className="container-fluid">
      <div className="ourcards">
        <div className="cards">
          <h1 className="names">{Personality[3].name}</h1>

          <div className="our-img">
            <img
              className={battle | info ? "display-none" : "display-block"}
              id={Personality[3].imgId}
              src={Personality[3].imgSrc}
              alt="Yasir Çeşmeci"
            />

            <div
              className={`about ${info && "display-block"}`}
              id={Personality[3].aboutId}
            >
              <h3>ÖZELLİKLER</h3>
              <p>{Personality[3].personalityOne}</p>
              <p>{Personality[3].personalityTwo}</p>
              <p>{Personality[3].personalityThree}</p>
              <p>{Personality[3].personalityFour}</p>
            </div>
            <div
              className={`battle ${battle && "display-block"}`}
              id={Personality[3].battleId}
            >
              <h3>YETENEKLER</h3>
              <div className="kahpelik">
                <p>{Personality[3].kahpelik}</p>
              </div>
              <div className="zeka">
                <p>{Personality[3].zeka}</p>
              </div>
              <div className="motosiklet">
                <p>{Personality[3].motosiklet}</p>
              </div>
              <div className="şans">
                <p>{Personality[3].sans}</p>
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

export default Yasir
