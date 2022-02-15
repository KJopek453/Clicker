class CPUpgrade{
    constructor(baseCost, additionalCP, numberOfUpgrades, cost){
        this.baseCost=baseCost;
        this.additionalCP=additionalCP;
        this.numberOfUpgrades=numberOfUpgrades;
        this.cost=cost;
    }
}

class PPSUpgrade{
    constructor(baseCost, additionalPPS, numberOfUpgrades, cost){
        this.baseCost=baseCost;
        this.additionalPPS=additionalPPS;
        this.numberOfUpgrades=numberOfUpgrades;
        this.cost=cost;
    }
}

const button = document.querySelector('.button');
const pointsDisplay = document.querySelector('.pointsDisplay');
const changeToCPUpgrades = document.querySelector('.changeToCPUpgrades');
const changeToPPSUpgrades = document.querySelector('.changeToPPSUpgrades');
const CPUpgrades = document.querySelector('.CPUpgrades');
const PPSUpgrades = document.querySelector('.PPSUpgrades');
const CPUpgrade1 = document.querySelector('.CPUpgrade1');
const PPSUpgrade1 = document.querySelector('.PPSUpgrade1');
const CPUpgrade1Text =  document.querySelector('#CPUpgrade1Text');
const PPSUpgrade1Text =  document.querySelector('#PPSUpgrade1Text');

let pointsCounter = 0, CP = 1, PPS = 0;

let CP1 = new CPUpgrade(100, 1, 1, 0);
let PPS1 = new PPSUpgrade(100, 1, 1, 0);
CP1.cost=parseInt(CP1.baseCost*Math.pow(1.15, CP1.numberOfUpgrades));
PPS1.cost=parseInt(PPS1.baseCost*Math.pow(1.15, PPS1.numberOfUpgrades));

PPSUpgrades.classList.add('hidden');
pointsDisplay.textContent = `${pointsCounter} pkt`;
CPUpgrade1Text.innerHTML = `koszt: ${CP1.cost} pkt`;
PPSUpgrade1Text.textContent = `koszt: ${PPS1.cost} pkt`;

CPUpgrade1.addEventListener('click', () => {
    if(pointsCounter>CP1.cost){
        CP1.cost=parseInt(CP1.baseCost*Math.pow(1.15, CP1.numberOfUpgrades));
        pointsCounter-=CP1.cost;
        CPUpgrade1Text.innerHTML = `koszt: ${CP1.cost} pkt`;
        CP += 1;
        CP1.numberOfUpgrades += 1;
    }
    
})

CPUpgrade1.addEventListener('click', () => {
    PPS1.cost=parseInt(PPS1.baseCost*Math.pow(1.15, PPS1.numberOfUpgrades));
    if(pointsCounter>PPS1.cost){
        pointsCounter-=PPS1.cost;
        CPUpgrade1Text.innerHTML = `koszt: ${PPS1.cost} pkt`;
        PPS += 1;
        PPS1.numberOfUpgrades += 1;
    }
    
})

button.addEventListener('click', () => {
    pointsCounter += CP;
    pointsDisplay.textContent = `${pointsCounter} pkt`;
})

changeToCPUpgrades.addEventListener('click', () => {
    CPUpgrades.classList.remove('hidden');
    PPSUpgrades.classList.add('hidden');
})

changeToPPSUpgrades.addEventListener('click', () => {
    CPUpgrades.classList.add('hidden');
    PPSUpgrades.classList.remove('hidden');
})

function PPSAdd(){
    pointsCounter+=PPS;
    pointsDisplay.textContent = `${pointsCounter} pkt`;
}
setInterval(PPSAdd, 1000)