import React from "react"
import {
  infoClick,
  battleClick,
  removeAboutClass,
  removeBattleClass,
} from "../script"

function Card(props) {
  return (
    <div className="container-fluid">
      <div className="ourcards">
        <div className="cards">
          <h1 className="names">{props.name}</h1>

          <div className="our-img">
            <img
              id={props.imgId}
              //burada style background img'le foto vardı
              src={props.imgSrc}
            />

            <div className="about" id={props.aboutId}>
              <h3>ÖZELLİKLER</h3>
              <p>{props.personalityOne}</p>
              <p>{props.personalityTwo}</p>
              <p>{props.personalityThree}</p>
              <p>{props.personalityFour}</p>
            </div>
            <div className="battle" id={props.battleId}>
              <h3>YETENEKLER</h3>
              <div className="kahpelik">
                <p>{props.kahpelik}</p>
              </div>
              <div className="zeka">
                <p>{props.zeka}</p>
              </div>
              <div className="motosiklet">
                <p>{props.motosiklet}</p>
              </div>
              <div className="şans">
                <p>{props.sans}</p>
              </div>
            </div>
          </div>

          <div>
            <img
              onClick={() => {
                battleClick()
                removeAboutClass()
              }}
              className="battle-img-first"
              src="images/battle.png"
              alt="battle"
            />
            <img
              onClick={() => {
                infoClick()
                removeBattleClass()
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

export default Card
