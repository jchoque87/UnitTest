import { DegreeCalculator } from "./DegreeCalculator.js"

const btn     = document.getElementById("btn");
const myvalue = document.getElementById("value");

btn.addEventListener('click', function () {
    const degree  = document.getElementById("degree").value;
    const type    = document.getElementById("type").value;
    const convert = document.getElementById("convert").value;
    console.log(degree, type, convert);
    const degreeCalculatorObj = new DegreeCalculator(degree, type, convert);
    myvalue.value = degreeCalculatorObj.getAnswer();
});

