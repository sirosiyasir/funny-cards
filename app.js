var info = document.querySelectorAll(".battle-img-second");
var ability = document.querySelectorAll(".battle-img-first");

/* OMER CARD */
info[0].addEventListener("click", function(){
    var omer = document.getElementById("ömer-img");
    var omerAbout = document.getElementById("about-omer");
    if (omerAbout.style.display === "none") {
      omerAbout.style.display = "block";
      omer.style.display = "none";
    } else {
      omerAbout.style.display = "none";
      omer.style.display = "block";
    }
    removeBattleClass();
})

ability[0].addEventListener("click", function(){
  var omer = document.getElementById("ömer-img");
  var omerBattle = document.getElementById("omer-battle");
  if (omerBattle.style.display === "none") {
    omerBattle.style.display = "block";
    omer.style.display = "none";
  } else {
    omerBattle.style.display = "none";
    omer.style.display = "block";
  }
  removeAboutClass();
})

function removeAboutClass(){
    var omerAbout = document.getElementById("about-omer");
  omerAbout.style.display = "none";
}

function removeBattleClass(){
  var omerBattle = document.getElementById("omer-battle");
omerBattle.style.display = "none";
}


/* ÇAĞRI CARD */

info[1].addEventListener("click", function(){
  var cagrı = document.getElementById("cagrı-img");
  var cagrıAbout = document.getElementById("about-cagrı");
  if (cagrıAbout.style.display === "none") {
    cagrıAbout.style.display = "block";
    cagrı.style.display = "none";
  } else {
    cagrıAbout.style.display = "none";
    cagrı.style.display = "block";
  }
  removeCagrıBattleClass();
})

ability[1].addEventListener("click", function(){
var cagrı = document.getElementById("cagrı-img");
var cagrıBattle = document.getElementById("cagrı-battle");
if (cagrıBattle.style.display === "none") {
  cagrıBattle.style.display = "block";
  cagrı.style.display = "none";
} else {
  cagrıBattle.style.display = "none";
  cagrı.style.display = "block";
}
removeCagrıAboutClass();
})

function removeCagrıAboutClass(){
  var cagrıAbout = document.getElementById("about-cagrı");
cagrıAbout.style.display = "none";
}

function removeCagrıBattleClass(){
var cagrıBattle = document.getElementById("cagrı-battle");
cagrıBattle.style.display = "none";
}


/* DOĞUKAN CARD */
info[2].addEventListener("click", function(){
  var dogi = document.getElementById("dogi-img");
  var dogiAbout = document.getElementById("about-dogi");
  if (dogiAbout.style.display === "none") {
    dogiAbout.style.display = "block";
    dogi.style.display = "none";
  } else {
    dogiAbout.style.display = "none";
    dogi.style.display = "block";
  }
  removeDogiBattleClass();
})

ability[2].addEventListener("click", function(){
var dogi = document.getElementById("dogi-img");
var dogiBattle = document.getElementById("dogi-battle");
if (dogiBattle.style.display === "none") {
  dogiBattle.style.display = "block";
  dogi.style.display = "none";
} else {
  dogiBattle.style.display = "none";
  dogi.style.display = "block";
}
removeDogiAboutClass();
})

function removeDogiAboutClass(){
  var dogiAbout = document.getElementById("about-dogi");
  dogiAbout.style.display = "none";
}

function removeDogiBattleClass(){
var dogiBattle = document.getElementById("dogi-battle");
dogiBattle.style.display = "none";
}

/* YASİR CARD */
info[3].addEventListener("click", function(){
  var yasir = document.getElementById("yasir-img");
  var yasirAbout = document.getElementById("about-yasir");
  if (yasirAbout.style.display === "none") {
    yasirAbout.style.display = "block";
    yasir.style.display = "none";
  } else {
    yasirAbout.style.display = "none";
    yasir.style.display = "block";
  }
  removeYasirBattleClass();
})

ability[3].addEventListener("click", function(){
var yasir = document.getElementById("yasir-img");
var yasirBattle = document.getElementById("yasir-battle");
if (yasirBattle.style.display === "none") {
  yasirBattle.style.display = "block";
  yasir.style.display = "none";
} else {
  yasirBattle.style.display = "none";
  yasir.style.display = "block";
}
removeYasirAboutClass();
})

function removeYasirAboutClass(){
  var yasirAbout = document.getElementById("about-yasir");
  yasirAbout.style.display = "none";
}

function removeYasirBattleClass(){
var yasirBattle = document.getElementById("yasir-battle");
yasirBattle.style.display = "none";
}