console.log("Hola");
console.log(document.getElementsByClassName("jsonly"));
const elems = document.getElementsByClassName("jsonly");

for (const elem of elems) {
  elem.style.display = "block";
  elem.style.visibility = "visible";
}

console.log(document.querySelector("#Projects .Flex"));
document.querySelector("#Projects .Flex").style["overflow"] = "hidden";
console.log(document.querySelector("#Projects .Flex"));
