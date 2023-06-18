
let marka = [
    'Toyota',
    'Porsche',
    'Nissan'
];

let model = [
    ['Camry','Corolla'],
    ['Cayenne','Boxster'],
    ['Altima','Maxima']
]
let markaX = document.getElementById('marka');
let modelX = document.getElementById('model');

function markaSelected(){
    let data = `<option value="" disabled selected>Marka Secin</option>`

    for(let i=0; i<marka.length; i++){
        data += `<option value="${i}"> ${marka[i]} </option>`
    }
    markaX.innerHTML = data;
}

markaSelected(); 

function modelSelected(){

    let value = markaX.value;

    let data = `<option value="" disabled selected>Model Secin</option>`

    for(let i=0; i<model[value].length; i++){
        data += `<option value=${i}> ${model[value][i]} </option>`
    }
    modelX.innerHTML = data;
} 

function printMessage(){
    let message = document.getElementById('message')
    message.innerText = `${marka[markaX.value]} ${model[markaX.value][modelX.value]} markali avtomobili secmisiniz`
}

function printImage(){
    let image = document.getElementById('image');
    
}

