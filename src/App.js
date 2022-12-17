import React from "react"
import Card from "./components/Card"
// Attributesler'ı import ediyorum
import Personality from "./Personality"

function App(props) {
  return (
    <div>
      {/* Personality variable'ından object'leri attributes olarak ekliyorum */}
      <Card
        name={Personality[0].name}
        imgId={Personality[0].imgId}
        imgSrc={Personality[0].imgSrc}
        aboutId={Personality[0].aboutId}
        battleId={Personality[0].battleId}
        kahpelik={Personality[0].kahpelik}
        zeka={Personality[0].zeka}
        motosiklet={Personality[0].motosiklet}
        sans={Personality[0].sans}
        personalityOne={Personality[0].personalityOne}
        personalityTwo={Personality[0].personalityTwo}
        personalityThree={Personality[0].personalityThree}
        personalityFour={Personality[0].personalityFour}
      />
      <Card
        name={Personality[1].name}
        imgId={Personality[1].imgId}
        imgSrc={Personality[1].imgSrc}
        aboutId={Personality[1].aboutId}
        battleId={Personality[1].battleId}
        kahpelik={Personality[1].kahpelik}
        zeka={Personality[1].zeka}
        motosiklet={Personality[1].motosiklet}
        sans={Personality[1].sans}
        personalityOne={Personality[1].personalityOne}
        personalityTwo={Personality[1].personalityTwo}
        personalityThree={Personality[1].personalityThree}
        personalityFour={Personality[1].personalityFour}
      />
      <Card
        name={Personality[2].name}
        imgId={Personality[2].imgId}
        imgSrc={Personality[2].imgSrc}
        aboutId={Personality[2].aboutId}
        battleId={Personality[2].battleId}
        kahpelik={Personality[2].kahpelik}
        zeka={Personality[2].zeka}
        motosiklet={Personality[2].motosiklet}
        sans={Personality[2].sans}
        personalityOne={Personality[2].personalityOne}
        personalityTwo={Personality[2].personalityTwo}
        personalityThree={Personality[2].personalityThree}
        personalityFour={Personality[2].personalityFour}
      />
      <Card
        name={Personality[3].name}
        imgId={Personality[3].imgId}
        imgSrc={Personality[3].imgSrc}
        aboutId={Personality[3].aboutId}
        battleId={Personality[3].battleId}
        kahpelik={Personality[3].kahpelik}
        zeka={Personality[3].zeka}
        motosiklet={Personality[3].motosiklet}
        sans={Personality[3].sans}
        personalityOne={Personality[3].personalityOne}
        personalityTwo={Personality[3].personalityTwo}
        personalityThree={Personality[3].personalityThree}
        personalityFour={Personality[3].personalityFour}
      />
    </div>
  )
}
export default App
