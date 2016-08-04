Thermostat = function (){
  this.temperature = 20;
  this._MINTEMP = 10;
  this.powerSave = true;
}

Thermostat.prototype.up = function () {
  if (this.powerSave === true && this.temperature >= 25) {
    throw new Error('maximum temperature reached');
  }
  else if (this.powerSave == false && this.temperature >= 32) {
    throw new Error('maximum temperature reached');
  }
  this.temperature++
};

Thermostat.prototype.down = function () {
  if (this.temperature <= this._MINTEMP) {
    throw new Error('minimum temperature reached');
  };
  this.temperature--
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false;
}

Thermostat.prototype.powerSaveOn = function() {
  this.powerSave = true;
}
