let carsElem = document.querySelector('.showCars');
let carMakesElem = document.querySelector('.carMakes');
let colorsElem = document.querySelector('.listOfColors');
let carColor = document.querySelector('.carColor');
let carBrand = document.querySelector('.carBrand');
let analyzeBtn = document.querySelector('.analyze');
let hbsDisplay = document.querySelector('.apiList').innerHTML;

var theTemplate = Handlebars.compile(hbsDisplay);

async function getAllCars(){
    let showingCars = await axios.get("http://api-tutor.herokuapp.com/v1/cars");
    console.log(showingCars);
    let cars = showingCars.data;
    console.log(cars);
    let carsDisplay = cars.slice(0, 4);
    console.log(carsDisplay);
        carsElem.innerHTML = theTemplate({
            showCarsAvailable: carsDisplay
        });
}

async function getAllMakeCars(){
    let showingCars = await axios.get("https://api-tutor.herokuapp.com/v1/makes");
    
    carMakesElem.innerHTML = theTemplate({
        ListOfCars: showingCars.data
    })
}

async function getListOfColors(){
    let showingColors = await axios.get("http://api-tutor.herokuapp.com/v1/colors");
    //console.log(showingColors.data);
    colorsElem.innerHTML = theTemplate({
        ListOfColors: showingColors.data
    })
}

function filterByColorAndBrand() {
    let results = carColor;
    console.log(results);
}

getAllCars();
getAllMakeCars();
getListOfColors();

analyzeBtn.addEventListener('click', filterByColorAndBrand)