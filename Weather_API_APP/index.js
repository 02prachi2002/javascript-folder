// const API_KEY = "d79ac099e2621ae7207b7e85836de565";
// async function weatherapicall()
// {
//     let city= "goa";
    
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
//     const data = await response.json();
//     console.log("waether data ", data);
// }
// weatherapicall();
// Second api call
//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={API_KEY}&units=metric
// async function weathersecondcall()
// {
//     try{
//         let latitude = 1;
//     let longitude = 1;
//     const result  = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
//     const data1 = await result.json();
//     console.log(data1);
//     }
//     catch(err){
//         console.log("the error is", err);
//     }
    
// }
// weathersecondcall();

const yourWeatherTab = document.querySelector("[your-weather-tab]");
const searchWeatherTab = document.querySelector("[search-weather-tab]");
const weatherContainer = document.querySelector("[weather-container]");
const myWeatherLocation = document.querySelector(".my-weather-location");
const searchForm = document.querySelector("[search-form]");
const searchCity = document.querySelector("[search-city]");
const loadingGif = document.querySelector(".loading-gif");
const searchLocation =  document.querySelector(".search-location");
const nameOfCity = document.querySelector(".name-of-city");
const nameOfSearchedLocation = document.querySelector("[name-of-searched-location]");
const countryIcon = document.querySelector("[country-icon]");
const weatherInLocation  = document.querySelector("[weather-in-location]");
const relatedImageOfWeather = document.querySelector("[related-image-of-weather]");
const tempOflocation = document.querySelector("[temp-of-location]");

const locationWindspeed = document.querySelector("[location-windspeed]");

const locationhumidity = document.querySelector("[location-humidity]");

const locationclouds = document.querySelector("[location-clouds]");

let currentTab = yourWeatherTab;
const API_KEY = "d79ac099e2621ae7207b7e85836de565";
currentTab.classList.add("current-tab");
getfromsesionstorage();

function switchTab(clickedTab){
    if(currentTab!=clickedTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab
        currentTab.classList.add("current-tab");
    }
    if(!searchForm.classList.contains("active")){
        myWeatherLocation.classList.remove("active");
        searchLocation.classList.remove("active");
        searchForm.classList.add("active");
    }
    else{
        searchLocation.classList.remove("active");
        searchForm.classList.remove("active");
        getfromsesionstorage();
    }
}

yourWeatherTab.addEventListener(
    "click", () =>{
        switchTab(yourWeatherTab);
    }
)
searchWeatherTab.addEventListener(
    "click",() =>{
        switchTab(searchWeatherTab);
    }
)

function getfromsesionstorage(){
    const localcoordinates = sessionStorage.getItem("user-coordinates");
    if(!localcoordinates){
        myWeatherLocation.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localcoordinates);
        fetchuserweatherinfo(coordinates);
    }
}

async function fetchuserweatherinfo(coordinates){
    const {lat,lon} = coordinates;
    myWeatherLocation.classList.remove("active");
    loadingGif.classList.add("active");
    try{
        const result  = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        const data = await result.json();
        loadingGif.classList.remove("active");
        searchLocation.classList.add("active");
        renderWeatherInfo(data);
        }
        catch(err){
            loadingGif.classList.remove("active");
        }
    }
function renderWeatherInfo(weatherInfo){

            //fetch values from weatherINfo object and put it UI elements
    nameOfSearchedLocation.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    weatherInLocation.innerText = weatherInfo?.weather?.[0]?.description;
    relatedImageOfWeather.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    tempOflocation.innerText = weatherInfo?.main?.temp;
    locationWindspeed.innerText = weatherInfo?.wind?.speed;
    locationhumidity.innerText = weatherInfo?.main?.humidity;
    locationclouds.innerText = weatherInfo?.clouds?.all;
}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
    }
}
function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchuserweatherinfo(userCoordinates);

}
const grantAccessButton = document.querySelector("[grantaccessbutton]");
grantAccessButton.addEventListener("click", getLocation);

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchCity.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})
async function fetchSearchWeatherInfo(city) {
    loadingGif.classList.add("active");
    searchLocation.classList.remove("active");
    myWeatherLocation.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingGif.classList.remove("active");
        searchLocation.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
}