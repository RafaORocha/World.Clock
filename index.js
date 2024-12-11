//Los Angeles
function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");

  //the query will select the element with the "id" of "los-angeles" and find the element with the class of "date-1"
  //let losAngelesDateElement = document.querySelector("#los-angeles .date-1");

  //We can optimize this line of code in the following way:
  let losAngelesDateElement = losAngelesElement.querySelector(".date-1");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do YYYY");
  //We can make it better...
  //losAngelesTimeElement.innerHTML = `${losAngelesTime.format("H:m:s")} <small>${losAngelesTime.format("A")}</small>`;
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "H:mm:ss:SSS [<small>]A[</small>]"
  );

  //São Paulo
  let saoPauloElement = document.querySelector("#sao-paulo");

  //the query will select the element with the "id" of "los-angeles" and find the element with the class of "date-1"
  //let losAngelesDateElement = document.querySelector("#los-angeles .date-1");

  //We can optimize this line of code in the following way:
  let saoPauloDateElement = saoPauloElement.querySelector(".date-2");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");
  let saoPauloTime = moment().tz("America/Sao_Paulo");

  saoPauloDateElement.innerHTML = saoPauloTime.format("dddd, MMMM Do YYYY");
  //We can make it better...
  //losAngelesTimeElement.innerHTML = `${losAngelesTime.format("H:m:s")} <small>${losAngelesTime.format("A")}</small>`;
  saoPauloTimeElement.innerHTML = saoPauloTime.format(
    "H:mm:ss:SSS [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

//We need to define the function "UpdateCity"
function updateCity(event) {
  //this is going to be whatever is inside the atribute "value"
  let cityTimeZone = event.target.value;
  //console.log(cityTimeZone);
  //We need to add the current time zone
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  //We will create a new variable to fix the city name
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  //console.log(cityTime.format("dddd, MMMM Do YYYY"));

  //I want to Select "cities" to replace all the cities data
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
              <h2>${cityName}</h2>
            <div class="date-1">${cityTime.format("dddd, MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "H:mm:ss:SSS"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;

  setInterval(() => {
    let cityTime = moment().tz(cityTimeZone);
    citiesElement.innerHTML = `<div class="city">
          <div>
              <h2>${cityName}</h2>
            <div class="date-1">${cityTime.format("dddd, MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "H:mm:ss:SSS"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
  }, 1000);

  document.querySelector("#homepagebutton").style.visibility = "visible";
}

let citiesSelectElement = document.querySelector("#countries");
citiesSelectElement.addEventListener("change", updateCity);
