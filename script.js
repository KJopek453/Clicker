//Klasa z parametrami ulepszenia mocy kliknięcia (ile pkt dostajesz za kliknięcie)
class CPUpgrade{
    constructor(baseCost, additionalCP, numberOfUpgrades, cost){
        this.baseCost=baseCost;
        this.additionalCP=additionalCP;
        this.numberOfUpgrades=numberOfUpgrades;
        this.cost=cost;
    }
}
//Klasa z parametrami ulepszenia ile punktów dostajesz na sekundę
class PPSUpgrade{
    constructor(baseCost, additionalPPS, numberOfUpgrades, cost){
        this.baseCost=baseCost;
        this.additionalPPS=additionalPPS;
        this.numberOfUpgrades=numberOfUpgrades;
        this.cost=cost;
    }
}
//Tworzenie zmiennych odnoszących się do danych klas oraz id
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
//Tworzenie zmiennych przechowywujących ilość twoich punktów, moc kliknięcia oraz ilość punktów jaką dostajesz na sekundę
let pointsCounter = 0, CP = 1, PPS = 0;
//Stworzenie obiektu dla pierwszych ulepszeń oraz ustawienie ich poczatkowego kosztu
let CP1 = new CPUpgrade(100, 1, 0, 0);
let PPS1 = new PPSUpgrade(100, 1, 0, 0);
CP1.cost=parseInt(CP1.baseCost*Math.pow(1.15, CP1.numberOfUpgrades));
PPS1.cost=parseInt(PPS1.baseCost*Math.pow(1.15, PPS1.numberOfUpgrades));
//Wczesne ukrycie ulepszeń punktów na sekundę, wyświetlenie początkowe textu pokazującego ilośc punktów oraz kosztu obu ulepszeń
PPSUpgrades.classList.add('hidden');
PPSUpgrade1.classList.add('hidden');
pointsDisplay.textContent = `${pointsCounter} pkt`;
CPUpgrade1Text.innerHTML = `koszt: ${CP1.cost} pkt`;
PPSUpgrade1Text.textContent = `koszt: ${PPS1.cost} pkt`;
//zdarzenie pozwalające kupić pierwsze ulepszenie mocy kliknięcia
CPUpgrade1.addEventListener('click', () => {
    if(pointsCounter>=CP1.cost){
        pointsCounter-=CP1.cost;
        pointsDisplay.textContent = `${pointsCounter} pkt`;
        CP += 1;
        CP1.numberOfUpgrades += 1;
    }
    CP1.cost=parseInt(CP1.baseCost*Math.pow(1.15, CP1.numberOfUpgrades));
    CPUpgrade1Text.innerHTML = `koszt: ${CP1.cost} pkt`;
})
//zdarzenie pozwalające kupić pierwsze ulepszenie punktów na sekundę
PPSUpgrade1.addEventListener('click', () => {
    if(pointsCounter>=PPS1.cost){
        pointsCounter-=PPS1.cost;
        pointsDisplay.textContent = `${pointsCounter} pkt`;
        PPS += 1;
        PPS1.numberOfUpgrades += 1;
    }
    PPS1.cost=parseInt(PPS1.baseCost*Math.pow(1.15, PPS1.numberOfUpgrades));
    PPSUpgrade1Text.innerHTML = `koszt: ${PPS1.cost} pkt`;
})
//zdarzenie dodające punkty zgodznie z mocą kliknięcia
button.addEventListener('click', () => {
    pointsCounter += CP;
    pointsDisplay.textContent = `${pointsCounter} pkt`;
})
//zdarzenie chowające ulepszenia punktów na sekundę i wyświetlająca ulepszenia mocy kliknięcia
changeToCPUpgrades.addEventListener('click', () => {
    CPUpgrades.classList.remove('hidden');
    PPSUpgrades.classList.add('hidden');
    CPUpgrade1.classList.remove('hidden');
    PPSUpgrade1.classList.add('hidden');
})
//zdarzenie chowające ulepszenia mocy kliknięcia i wyświetlająca ulepszenia punktów na sekundę
changeToPPSUpgrades.addEventListener('click', () => {
    CPUpgrades.classList.add('hidden');
    PPSUpgrades.classList.remove('hidden');
    CPUpgrade1.classList.add('hidden');
    PPSUpgrade1.classList.remove('hidden');
})
//zdarzenie dodające punkty na sekundę
function PPSAdd(){
    pointsCounter+=PPS;
    pointsDisplay.textContent = `${pointsCounter} pkt`;
}
setInterval(PPSAdd, 1000)