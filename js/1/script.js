var ID = document.getElementById(`moku`);
console.log(ID)

ID.style.backgroundColor = "green";
ID.style.width = "300px";
ID.style.height = "300px";
ID.style.margin = "0 auto";

/////2 uzduotis//////////////////////////////////////////
const currentDiv = document.getElementById("moku");
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "moku2");
const newContent = document.createTextNode("valio pavyko2");
newDiv.appendChild(newContent);
document.body.insertBefore(newDiv, currentDiv);
var ID2 = document.getElementById(`moku2`);
ID2.style.backgroundColor = "red";
ID2.style.width = "300px";
ID2.style.height = "300px";
ID2.style.margin = "0 auto";
//d
const newButton = document.createElement("button");
newButton.setAttribute("id", "spaudaliukas");
const newContent2 = document.createTextNode("spaudaliukas");
newButton.appendChild(newContent2);
document.body.insertBefore(newButton, currentDiv);
//e
document.getElementById("spaudaliukas").addEventListener("click", myFunction);

function myFunction() {
    newDiv.style.display = "none";
    newButton.style.display = "none";
}
function youtube() {
    const iframe = document.createElement("iframe");

    iframe.src = "https://www.youtube.com/embed/gRxLRVQJiFU";
    document.body.appendChild(iframe);
    iframe.style.display = "block";
    iframe.style.margin = "0 auto";
}

