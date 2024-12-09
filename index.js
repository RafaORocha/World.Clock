//Los Angeles
function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");

  //the query will select the element with the "id" of "los-angeles" and find the element with the class of "date-1"
  //let losAngelesDateElement = document.querySelector("#los-angeles .date-1");

  //We can optimize this line of code in the following way:
  let losAngelesDateElement = losAngelesElement.querySelector(".date-1");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Mo YYYY");
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

  saoPauloDateElement.innerHTML = saoPauloTime.format("dddd, MMMM Mo YYYY");
  //We can make it better...
  //losAngelesTimeElement.innerHTML = `${losAngelesTime.format("H:m:s")} <small>${losAngelesTime.format("A")}</small>`;
  saoPauloTimeElement.innerHTML = saoPauloTime.format(
    "H:mm:ss:SSS [<small>]A[</small>]"
  )};

updateTime();

setInterval(updateTime, 1);
