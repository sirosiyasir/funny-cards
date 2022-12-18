import React from "react"
// Attributesler'ı import ediyorum
import Personality from "./Personality"

/* var info = document.querySelectorAll(".battle-img-second")
  var ability = document.querySelectorAll(".battle-img-first") */

/* OMER CARD */

function infoClick() {
  for (let i = 0; i < Personality.length; i++) {
    var img = document.getElementById(`${Personality[i].imgId}`)
    var about = document.getElementById(`${Personality[i].aboutId}`)
    if (about.style.display === "none") {
      about.style.display = "block"
      img.style.display = "none"
    } else {
      about.style.display = "none"
      img.style.display = "block"
    }
    removeBattleClass()
  }
}
function battleClick() {
  for (let i = 0; i < Personality.length; i++) {
    var img = document.getElementById(`${Personality[i].imgId}`)
    var battle = document.getElementById(`${Personality[i].battleId}`)
    if (battle.style.display === "none") {
      battle.style.display = "block"
      img.style.display = "none"
    } else {
      battle.style.display = "none"
      img.style.display = "block"
    }
    removeAboutClass()
  }
}

function removeAboutClass() {
  for (let i = 0; i < Personality.length; i++) {
    var about = document.getElementById(`${Personality[i].aboutId}`)
    about.style.display = "none"
  }
}

function removeBattleClass() {
  for (let i = 0; i < Personality.length; i++) {
    var battle = document.getElementById(`${Personality[i].battleId}`)
    battle.style.display = "none"
  }
}

export { infoClick, battleClick }
