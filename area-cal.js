const result = document.getElementById("result");
const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");
const inputWidth = document.getElementById("inputWidth");
const inputHeight = document.getElementById("inputHeight");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const record = document.getElementById("record");

const addFun = (w, h) => w + h;
const subFun = (w, h) => w - h;
const mulFun = (w, h) => w * h;
const divFun = (w, h) => w / h;

// const areaCal = (w, h) => w * h;

// const addBtn = () => {
//     const areaMultiple = areaCal(inputWidth.valueAsNumber, inputHeight.valueAsNumber)
//     result.innerHTML = `${inputWidth.valueAsNumber}ft * ${inputHeight.valueAsNumber}ft = ${areaMultiple}ft<sup>2</sup>`; 
//     inputWidth.value = ""
//     inputHeight.value = ""
// }

const addBtn = () => {
    const areaMultiple = addFun(inputWidth.valueAsNumber, inputHeight.valueAsNumber)
    result.innerHTML = `${inputWidth.valueAsNumber} + ${inputHeight.valueAsNumber} = ${areaMultiple}`; 
    inputWidth.value = ""
    inputHeight.value = ""
}

const subBtn = () => {
    const areaMultiple = subFun(inputWidth.valueAsNumber, inputHeight.valueAsNumber)
    result.innerHTML = `${inputWidth.valueAsNumber} - ${inputHeight.valueAsNumber} = ${areaMultiple}`; 
    inputWidth.value = ""
    inputHeight.value = ""
}

const mulBtn = () => {
    const areaMultiple = mulFun(inputWidth.valueAsNumber, inputHeight.valueAsNumber)
    result.innerHTML = `${inputWidth.valueAsNumber} * ${inputHeight.valueAsNumber} = ${areaMultiple}`; 
    inputWidth.value = ""
    inputHeight.value = ""
}

const divBtn = () => {
    const areaMultiple = divFun(inputWidth.valueAsNumber, inputHeight.valueAsNumber)
    result.innerHTML = `${inputWidth.valueAsNumber} / ${inputHeight.valueAsNumber} = ${areaMultiple}`; 
    inputWidth.value = ""
    inputHeight.value = ""
}

const clearCal = () => {
    result.innerHTML = ""
}

const storeCal = () => {
    record.innerHTML += `<li>${result.innerHTML}</li>`;
    clearCal()
}