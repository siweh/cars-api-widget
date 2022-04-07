let carsElem = document.querySelector('.showCars');
let carMakesElem = document.querySelector('.carMakes');
let colorsElem = document.querySelector('.listOfColors');
let carColor = document.querySelector('.carColor');
let carBrand = document.querySelector('.carBrand');
let analyzeBtn = document.querySelector('.analyze');
let errorMsg = document.querySelector('.errorMsg');
let showFilteredResults = document.querySelector('.filteredResults');
let listOfMakesAndColors = document.querySelector('.listOfColorsAndMakes').innerHTML;
let hbsDisplay = document.querySelector('.apiList').innerHTML;

var theTemplate = Handlebars.compile(hbsDisplay);
let listTemplate = Handlebars.compile(listOfMakesAndColors);

async function getAllCars(){
    let showingCars = await axios.get("https://api-tutor.herokuapp.com/v1/cars");
    console.log(showingCars);
    let cars = showingCars.data;
    console.log(cars);
    let carsDisplay = cars.slice(0, 30);
    console.log(carsDisplay);
        carsElem.innerHTML = theTemplate({
            showCarsAvailable: carsDisplay
        });
    return carsDisplay;
}

async function getAllMakeCars(){
    let showingCars = await axios.get("https://api-tutor.herokuapp.com/v1/makes");
    
    carMakesElem.innerHTML = listTemplate({
        ListOfCars: showingCars.data
    });
}

async function getListOfColors(){
    let showingColors = await axios.get("https://api-tutor.herokuapp.com/v1/colors");
    //console.log(showingColors.data);
    colorsElem.innerHTML = listTemplate({
        ListOfColors: showingColors.data
    })
}

async function filterByColorAndBrand() {
   let color = carColor.value;
   //console.log(color);
   let make = carBrand.value;
   //console.log(make);
   let cars = await axios.get("https://api-tutor.herokuapp.com/v1/cars");
    console.log(cars.data);
   let filteredCarsByColorAndBrand = cars.data.filter((car) => {
        //?Check if dropdown is not equal to undefined
        if (make !== 'all' && color !== 'all') {
            return car.color === color && car.make === make;
        }else {
            return car.color === color || car.make === make;
        }
   });
   if(color === 'all' && make === 'all'){
       errorMsg.innerHTML = listTemplate({
           errors: 'Please choose color and make of car'});
   }

   setTimeout(() => {
    document.querySelector('.errorMsg').innerHTML = '';
  }, 3000);
   //console.log(filteredCarsByColorAndBrand);
   showFilteredResults.innerHTML = theTemplate({
       filteredCars: filteredCarsByColorAndBrand
   });
   return filteredCarsByColorAndBrand
}

getAllCars();
getAllMakeCars();
getListOfColors();

analyzeBtn.addEventListener('click', filterByColorAndBrand)