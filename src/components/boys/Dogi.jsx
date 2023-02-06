// Kişilik özelliklerini kaydettiğim objecti import ediyorum
import Personality from "../../Personality"
import { useState } from "react"
function Dogi() {
  const [battle, setBattle] = useState(false)
  const [info, setInfo] = useState(false)
  return (
    <div className="container-fluid">
      <div className="ourcards">
        <div className="cards">
          <h1 className="names">{Personality[2].name}</h1>

          <div className="our-img">
            <img
              className={battle | info ? "display-none" : "display-block"}
              id={Personality[2].imgId}
              src={Personality[2].imgSrc}
              alt="Doğukan Güler"
            />

            <div
              className={`about ${info && "display-block"}`}
              id={Personality[2].aboutId}
            >
              <h3>ÖZELLİKLER</h3>
              <p>{Personality[2].personalityOne}</p>
              <p>{Personality[2].personalityTwo}</p>
              <p>{Personality[2].personalityThree}</p>
              <p>{Personality[2].personalityFour}</p>
            </div>
            <div
              className={`battle ${battle && "display-block"}`}
              id={Personality[2].battleId}
            >
              <h3>YETENEKLER</h3>
              <div className="kahpelik">
                <p>{Personality[2].kahpelik}</p>
              </div>
              <div className="zeka">
                <p>{Personality[2].zeka}</p>
              </div>
              <div className="motosiklet">
                <p>{Personality[2].motosiklet}</p>
              </div>
              <div className="şans">
                <p>{Personality[2].sans}</p>
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

export default Dogi
