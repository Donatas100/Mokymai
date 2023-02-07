var Maryte = 7
var Jonukas = 3
var sudetis = Maryte + Jonukas
console.log(sudetis)
sudetis += 10
console.log(sudetis)
sudetis -= 15
console.log(sudetis)
if (Maryte > Jonukas) {
    console.log("Maryte turi daugiau uoboliu negu Jonukas")
}
else if (Maryte < Jonukas) {
    console.log("Jonukas turi daugiau uoboliu negu Maryte")
}
else if (Maryte == Jonukas) {
    console.log("Atiduokim uobolius Editai")
}

switch (sudetis) {
    case 1:
        console.log("Jus turite", sudetis, "obuolius")
        break;
    case 2:
        console.log("Jus turite", sudetis, "obuolius")
        break;
    case 3:
        console.log("Jus turite", sudetis, "obuolius")
        break;
    case 4:
        console.log("Jus turite", sudetis, "obuolius")
        break;
    case 5:
        console.log("Jus turite", sudetis, "obuolius")
        break;
    case 6:
        console.log("Jus turite", sudetis, "obuolius")
        break;
    case 7:
        console.log("Jus turite", sudetis, "obuolius")
        break;
    case 8:
        console.log("Jus turite", sudetis, "obuolius")
        break;
    case 9:
        console.log("Jus turite", sudetis, "obuolius")
        break;
    case 10:
        console.log("Jus turite", sudetis, "obuolius")
        break;
    default:
        console.log("Jus turite daugiau nei 10 obuoliu")
}

var vaisiai = ["vynuoge", "arbuzas", "kriause", "uobolys", "bananas", "mandarinas"]

console.log(vaisiai[2], vaisiai[4])

for (let i = 0; i < vaisiai.length; i++) {
    console.log(vaisiai[i])
}

function spauzdinu(pavadinimas, kaina) {
    console.log(pavadinimas, kaina, "$")
}
spauzdinu("moliugu sriuba", 5.30)