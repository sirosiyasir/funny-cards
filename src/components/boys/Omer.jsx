//Vanilla js'i import ediyorum
import { infoClick, battleClick } from "../../script.js"
// Kişilik özelliklerini kaydettiğim objecti import ediyorum
import Personality from "../../Personality"

function Omer() {
  return (
    <div className="container-fluid">
      <div className="ourcards">
        <div className="cards">
          <h1 className="names">{Personality[0].name}</h1>

          <div className="our-img">
            <img
              id={Personality[0].imgId}
              src={Personality[0].imgSrc}
              alt="Ömer Çetin"
            />

            <div className="about" id={Personality[0].aboutId}>
              <h3>ÖZELLİKLER</h3>
              <p>{Personality[0].personalityOne}</p>
              <p>{Personality[0].personalityTwo}</p>
              <p>{Personality[0].personalityThree}</p>
              <p>{Personality[0].personalityFour}</p>
            </div>
            <div className="battle" id={Personality[0].battleId}>
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
                battleClick("0")
              }}
              className="battle-img-first"
              src="images/battle.png"
              alt="battle"
            />
            <img
              onClick={() => {
                infoClick("0")
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
