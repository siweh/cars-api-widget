let carsElem = document.querySelector('.showCars');
let carMakesElem = document.querySelector('.carMakes');
let colorsElem = document.querySelector('.listOfColors');
let carColor = document.querySelector('.carColor');
let carBrand = document.querySelector('.carBrand');
let analyzeBtn = document.querySelector('.analyze');
let showFilteredResults = document.querySelector('.filteredResults');
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

async function filterByColorAndBrand() {
   let color = carColor.value;
   console.log(color);
   let make = carBrand.value;
   console.log(make);
   let cars = await axios.get("http://api-tutor.herokuapp.com/v1/cars");
    console.log(cars.data);
//    let results = cars.data.map(car => {
//        if(car === colors && car === brand){
//          return car;
//        }
//    })
   let filteredCarsByColorAndBrand = cars.data.filter((car) => {
        return car.color === color && car.make === make;
   });
   console.log(filteredCarsByColorAndBrand);
   showFilteredResults.innerHTML = theTemplate({
       filteredCars: filteredCarsByColorAndBrand
   });
   return filteredCarsByColorAndBrand
}

getAllCars();
getAllMakeCars();
getListOfColors();
//await filterByColorAndBrand();

analyzeBtn.addEventListener('click', filterByColorAndBrand)