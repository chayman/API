// api key: ca55ea3cf6371eac722ebd029b7e4ade
var base = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'sydney';
var units = '&units=metric';
var apikey = '&appid=ca55ea3cf6371eac722ebd029b7e4ade';
var url;
var weather;
var input;
var button;
var greeting;


function setup() {
  createCanvas(1000, 1000);
  url = base + city + units + apikey;
  // console.log(url);
  loadJSON(url, getData);



  input = createInput();
  input.position(20, 100);

  button = createButton('ENTER');
  button.position(150, 100);
  button.mousePressed(greet);

fill(255);
  textAlign(CENTER)
  textSize(15);
  
  greeting = createElement('h2', ' ');
  greeting.position(20, 40);


}

function getData(data) {
  weather = data;
  console.log(weather);

}
function greet() {
  var name = input.value();
  if(input.value() == 'wind'){
     greeting.html("the wind speed in " + city + " is: " + weather.wind.speed + " at "+weather.wind.deg+ " degrees", 330, 330);
  input.value('');
  }
   if(input.value() == 'humidity'){
     greeting.html("the humidity in " + city + " is: " + weather.main.humidity + " ", 330, 330);
  input.value('');
  }
   if(input.value() == 'coordinates'){
     greeting.html("the coordinates of " + city + " are: " + weather.coord.lon + " longitude " +weather.coord.lat+ " latitude", 330, 330);
  input.value('');
  }

}

function draw() {
  background(210,220,220);
  fill(0);
  textSize(18);
    text('type coordinates, wind or humidity and click ENTER', 235, 50);
  
  if (weather) {
   text("the temp in " + city + " is: " + weather.main.temp + " degrees celcius", 500, 400);
    fill(255);
    ellipse(width / 2, height / 2, weather.main.temp, weather.main.temp);
  }
}

