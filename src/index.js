$(document).ready(function() {

var thermostat = new Thermostat();
$('#temperature').text(thermostat.temperature);

$('#temperature-down').click(function(){
  thermostat.down();
  $('#temperature').text(thermostat.temperature);
})
$('#temperature-up').click(function(){
  thermostat.up();
  $('#temperature').text(thermostat.temperature)
});
$('#temperature-reset').click(function(){
  thermostat.reset();
  $('#temperature').text(thermostat.temperature)
});
$('#powersaving-off').click(function(){
  thermostat.powerSaveOff();
  $('#powerSave').text('off')
  $('#temperature').text(thermostat.temperature)
});
});
