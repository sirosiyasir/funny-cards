// Kişilik özelliklerini kaydettiğim objecti import ediyorum
import Personality from "../../Personality"
import { useState } from "react"

function Omer() {
  const [battle, setBattle] = useState(false)
  const [info, setInfo] = useState(false)
  return (
    <div className="container-fluid">
      <div className="ourcards">
        <div className="cards">
          <h1 className="names">{Personality[0].name}</h1>

          <div className="our-img">
            <img
              className={battle | info ? "display-none" : "display-block"}
              id={Personality[0].imgId}
              src={Personality[0].imgSrc}
              alt="Ömer Çetin"
            />

            <div
              className={`about ${info && "display-block"}`}
              id={Personality[0].aboutId}
            >
              <h3>ÖZELLİKLER</h3>
              <p>{Personality[0].personalityOne}</p>
              <p>{Personality[0].personalityTwo}</p>
              <p>{Personality[0].personalityThree}</p>
              <p>{Personality[0].personalityFour}</p>
            </div>
            <div
              className={`battle ${battle && "display-block"}`}
              id={Personality[0].battleId}
            >
              <h3>YETENEKLER</h3>
              <div className="kahpelik">
                <p>{Personality[0].kahpelik}</p>
              </div>
              <div className="zeka">
                <p>{Personality[0].zeka}</p>
              </div>
              <div className="motosiklet">
                <p>{Personality[0].motosiklet}</p>
              </div>
              <div className="şans">
                <p>{Personality[0].sans}</p>
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

export default Omer
