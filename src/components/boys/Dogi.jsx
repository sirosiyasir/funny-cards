//Vanilla js'i import ediyorum
import { infoClick, battleClick } from "../../script.js"
// Kişilik özelliklerini kaydettiğim objecti import ediyorum
import Personality from "../../Personality"

function Dogi() {
  return (
    <div className="container-fluid">
      <div className="ourcards">
        <div className="cards">
          <h1 className="names">{Personality[2].name}</h1>

          <div className="our-img">
            <img
              id={Personality[2].imgId}
              src={Personality[2].imgSrc}
              alt="Doğukan Güler"
            />

            <div className="about" id={Personality[2].aboutId}>
              <h3>ÖZELLİKLER</h3>
              <p>{Personality[2].personalityOne}</p>
              <p>{Personality[2].personalityTwo}</p>
              <p>{Personality[2].personalityThree}</p>
              <p>{Personality[2].personalityFour}</p>
            </div>
            <div className="battle" id={Personality[2].battleId}>
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
                battleClick("2")
              }}
              className="battle-img-first"
              src="images/battle.png"
              alt="battle"
            />
            <img
              onClick={() => {
                infoClick("2")
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
