
var futbolininkai = [
    {
        greitis: 5,
        vardas: "Loras",
        pavarde: "Neverlivdas",
        ugis: 1.80,
        amzius: 25,
    },
    {
        greitis: 10,
        vardas: "Paulius",
        pavarde: "Kreivakojis",
        ugis: 1.66,
        amzius: 45,
    },
    {
        greitis: 6,
        vardas: "Norius",
        pavarde: "Neregys",
        ugis: 1.88,
        amzius: 28,
    },
]

let greitis = 0;
let greiciausias
function isvesti(futbolininkas) {
    var divas = document.createElement("div")
    divas.innerHTML = futbolininkas.vardas + " " + futbolininkas.pavarde + " amzius " + futbolininkas.amzius + " ugis " + futbolininkas.ugis + " greitis " + futbolininkas.greitis
    document.body.appendChild(divas)

    if (futbolininkas.greitis > greitis) {
        greitis = futbolininkas.greitis
        greiciausias = futbolininkas.vardas

    }

}

futbolininkai.forEach(futbolininkas => isvesti(futbolininkas)
)
function greiciausiasfb() {
    var divas = document.createElement("div")
    divas.innerHTML = "greiciausias futbolininkas: " + greiciausias
    document.body.appendChild(divas)

}
greiciausiasfb()

////////////////////////////nr2////////////////
var masinos = [
    {
        pavadinimas: "Fiat 500",
        greitis: 50,
        kelias: 20
    },
    {
        pavadinimas: "Opel Omega",
        greitis: 70,
        kelias: 90
    },
    {
        pavadinimas: "VW Passat",
        greitis: 30,
        kelias: 50

    },
]




function perKiekLaikoNuvaziuosKelia(greitis, atstumas) {
    return atstumas / greitis

}
masinos.forEach(masina => masina.vaziavoLaiko = Math.round(perKiekLaikoNuvaziuosKelia(masina.greitis, masina.kelias) * 10) / 10)


function isvesti2(masina) {
    var divas = document.createElement("div")
    divas.innerHTML = masina.pavadinimas + " greitis " + masina.greitis + " nuvaziuotas kelias " + masina.kelias + " uztruko valandu nuvaziuoti kelia " + masina.vaziavoLaiko
    document.body.appendChild(divas)
    if (masina.vaziavoLaiko > laikas) {
        laikas = masina.vaziavoLaiko
        ilgiausiaiVaziavo = masina.pavadinimas
    }
}
let laikas = 0;
let ilgiausiaiVaziavo
function render() {
    masinos.forEach(masina => isvesti2(masina))

    var divas = document.createElement("div")
    divas.innerHTML = "Ilgiausiai vaziavo " + ilgiausiaiVaziavo + " uztruko " + laikas + " valandu "
    document.body.appendChild(divas)
}

//console.log(masinos)

// function popUp() {

//     console.log("Megstu programuoti.Yey 😄");
// }
// //

// /////////////////2 uduotis/////////////////
// function vaisiai(pavadinimas, kaina, kiekis) {
//     const kaina5x = kaina * kiekis;
//     const newText = document.createElement("p");
//     const currentDiv = document.getElementById("apacia");
//     const newContent = document.createTextNode(pavadinimas + " 5 vienetai kainuoja " + kaina5x);
//     newText.appendChild(newContent);
//     document.body.insertBefore(newText, currentDiv);
// }
// vaisiai("kriause", 0.5, 5)

// ///////////3uduotis/////////////////////
// function validateForm(event) {

//     let x = document.forms["myForm"]["fname"].value;
//     let y = document.forms["myForm"]["lname"].value;
//     let z = document.forms["myForm"]["iname"].value;
//     vaisiai(x, y, z)
//     console.log(x, y, z);
// }

// ////4 uzduotis/////////////////////////////
// let kasantras = true;
// const herojai = ["Spaidermenas-leidzia voratinklius", "Betmenas-turtuolis atsiskyrelis", "Seimos bicas-megsta alu", "H simpsonas-augina 3 vaikus", "Songokas-apgyne zeme n kartu"];
// function isvesti(herojus) {
//     const newText2 = document.createElement("p");
//     const currentDiv2 = document.getElementById("apacia");
//     const newContent2 = document.createTextNode(herojus);
//     newText2.appendChild(newContent2);
//     document.body.insertBefore(newText2, currentDiv2);
//     if (kasantras) {
//         newText2.style.backgroundColor = "blue";
//         newText2.style.color = "white";
//     }
//     else {
//         newText2.style.backgroundColor = "white";
//         newText2.style.color = "black";
//     }
//     kasantras = !kasantras;
// }

// herojai.forEach(herojus => isvesti(herojus))





// var ID = document.getElementById(`moku`);
// console.log(ID)

// ID.style.backgroundColor = "green";
// ID.style.width = "300px";
// ID.style.height = "300px";
// ID.style.margin = "0 auto";

// /////2 uzduotis//////////////////////////////////////////
// const currentDiv = document.getElementById("moku");
// const newDiv = document.createElement("div");
// newDiv.setAttribute("id", "moku2");
// const newContent = document.createTextNode("valio pavyko2");
// newDiv.appendChild(newContent);
// document.body.insertBefore(newDiv, currentDiv);
// var ID2 = document.getElementById(`moku2`);
// ID2.style.backgroundColor = "red";
// ID2.style.width = "300px";
// ID2.style.height = "300px";
// ID2.style.margin = "0 auto";
// //d
// const newButton = document.createElement("button");
// newButton.setAttribute("id", "spaudaliukas");
// const newContent2 = document.createTextNode("spaudaliukas");
// newButton.appendChild(newContent2);
// document.body.insertBefore(newButton, currentDiv);
// //e
// document.getElementById("spaudaliukas").addEventListener("click", myFunction);

// function myFunction() {
//     newDiv.style.display = "none";
//     newButton.style.display = "none";
// }
// function youtube() {
//     const iframe = document.createElement("iframe");

//     iframe.src = "https://www.youtube.com/embed/gRxLRVQJiFU";
//     document.body.appendChild(iframe);
//     iframe.style.display = "block";
//     iframe.style.margin = "0 auto";
// }

