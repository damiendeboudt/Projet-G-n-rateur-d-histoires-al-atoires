let name = ["Josh", "Francis", "Françoise", "Didier", "MBappé"];
let objects = ["un vélo", "un ordinateur", "un ballon", "une tente de camping", "un stylo"];
let temperature = ["à 36°C", "à 3°C", "à 15°C", "à 0°C", "à 41°C"];
let where = ["ici", "à Paris", "à Amsterdam", "chez ta mère", "dans ma chambre"];
let verbe = ["pêchent", "utilisent", "réparent", "mangent", "mangent"];

const buttonGenerate = document.getElementById("generate");
let userName = document.getElementById("name");
let history = document.getElementById("history");

function generate () {
    let aleatName = name[Math.floor(Math.random() * name.length)];
    let aleatObjects = objects[Math.floor(Math.random() * objects.length)];
    let aleatTemperature = temperature[Math.floor(Math.random() * temperature.length)];
    let aleatWhere = where[Math.floor(Math.random() * where.length)];
    let aleatVerbe = verbe[Math.floor(Math.random() * verbe.length)];
    history.innerHTML +=  userName.value + " et " + aleatName + " " + aleatVerbe + " " + aleatObjects + " " +
        aleatTemperature + " " + aleatWhere;
   const ligne = document.createElement("br");
   history.appendChild(ligne)

}


buttonGenerate.addEventListener("click", generate)
