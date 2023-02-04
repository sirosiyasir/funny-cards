// Attributesler'ı import ediyorum
import Personality from "./Personality"

function infoClick(e) {
  var img = document.getElementById(`${Personality[e].imgId}`)
  var about = document.getElementById(`${Personality[e].aboutId}`)
  if (about.style.display === "none") {
    about.style.display = "block"
    img.style.display = "none"
  } else {
    about.style.display = "none"
    img.style.display = "block"
  }
  removeBattleClass(e)
}
function battleClick(e) {
  var img = document.getElementById(`${Personality[e].imgId}`)
  var battle = document.getElementById(`${Personality[e].battleId}`)
  if (battle.style.display === "none") {
    battle.style.display = "block"
    img.style.display = "none"
  } else {
    battle.style.display = "none"
    img.style.display = "block"
  }
  removeAboutClass(e)
}

function removeAboutClass(e) {
  var about = document.getElementById(`${Personality[e].aboutId}`)
  about.style.display = "none"
}

function removeBattleClass(e) {
  var battle = document.getElementById(`${Personality[e].battleId}`)
  battle.style.display = "none"
}

export { infoClick, battleClick }
