let button = document.getElementById("btn");
let outPut = document.getElementById("output");

const a = 1;
const b = 2;
const c = 3;
const d = 4;
const e = 5;
const f = 6;
const g = 7;
const h = 8;






btn.addEventListener("click", function () {
  let inputValue = document.getElementById("input").value;
    
  let inputValueArray = inputValue.split()


for (let i = 0; i < inputValueArray.length; i++) {
    if (inputValueArray[i] === "a")  {
        console.log("1")
    } else if(inputValueArray[i] === "b"){
        console.log(2)
    }
}
 


outPut.textContent = inputValueArray;
});
