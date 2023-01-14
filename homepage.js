var apiKey = "00707101834c4622f9ebb2e26b8610a6";
var temp = document.querySelector ('.temp');
var wind = document.querySelector ('.wind');
var humidity = document.querySelector ('.humidity');

// select the search button
var searchbtn = document.querySelector ('#searchbtn');

function getCurrent (currentData) {
console.log(currentData);
temp.textContent = currentData.list[0].main.temp;
wind.textContent = currentData.list[0].wind;
humidity.textContent = currentData.list[0].main.humidity;
}

// declaring the getForecast function 
function getForecast (forecastData){
  console.log(forecastData);
  for (i=0; i< forecastData.list.length; i+=8){
    console.log(forecastData.list[i])
    temp.textContent = forecastData.list[i].main.temp;
    wind.textContent = forecastData.list[i].wind;
    humidity.textContent = forecastData.list[i].main.humidity;
    
  }
}

// create function to return lat and lon
function getGeo (city){
    var geoUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

    fetch(geoUrl).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            // console.log(data);
            getCurrent(data);
            getForecast(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      });
}
// create click event on the search btn
searchbtn.addEventListener('click',function(event){
    event.preventDefault();
    // select the inputField from the html
    var inputField = document.querySelector ('#search');

    // get the value user type into the inputField
    var inputValue = inputField.value; 
    
    // call get geo function and pass the value of the city name into that function
    getGeo(inputValue) 
});








// call a function when click event happens
// searchbtn.addEventListener('click',function(event)){
// event.preventDefault();

// console.logs.push(Array.from(list));
// }

