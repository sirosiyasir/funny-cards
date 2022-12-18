import React from "react"
import createCard from "./components/Card"
// Attributesler'ı import ediyorum
import Personality from "./Personality"

function App(props) {
  return (
    <div>
      {/* .map yönetimini kullanarak, her bir kişi için(toplamda 4) bir adet <Card /> oluşturup ve yine her bir <Card />'ı attributes'lerle doldurmak yerine
    tek bir function içerisinde bir <Card /> oluşturdum ve onu attributesler'le doldurdum daha sonra Personality(objectlerin bulunduğu dosya)'de kaç
    adet object bulunuyorsa createCard function'unu her biri için döndürmesini sağlattım (.map yöntemi sayesinde) */}
      {Personality.map(createCard)}
    </div>
  )
}
export default App
