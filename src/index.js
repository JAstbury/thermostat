$(document).ready(function() {

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  })
})

var thermostat = new Thermostat();
updateTemperature();

$('#temperature-down').click(function(){
  thermostat.down();
  updateTemperature();
});
$('#temperature-up').click(function(){
  thermostat.up();
  updateTemperature();
});
$('#temperature-reset').click(function(){
  thermostat.reset();
  updateTemperature();
});

$('#powersaving-off').click(function(){
  thermostat.powerSaveOff();
  $('#power-saving-status').text('off')
  updateTemperature();
});

$('#powersaving-on').click(function(){
  thermostat.powerSaveOn();
  $('#power-saving-status').text('on')
  updateTemperature();
});
function updateTemperature(){
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energy());
};
});
