describe("thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });
  it("increases the temperature with the up button", function(){
    thermostat.up()
    expect(thermostat.temperature).toBeGreaterThan(20)
  });
  it("decreases the temperature with the down button", function(){
    thermostat.down()
    expect(thermostat.temperature).toBeLessThan(20)
  });
  it("has a minimum temperature of 10 degrees", function(){
    while(thermostat.temperature > 10){
      thermostat.down();
    }
    expect(function(){thermostat.down();}).toThrowError('minimum temperature reached')
  });
  it("has power saving mode on by default", function(){
    expect(thermostat.powerSave).toEqual(true);
  })
  it("has maximum temperature of 25 on power saving mode", function(){
    while(thermostat.temperature < 25){
      thermostat.up();
    }
    expect(function(){thermostat.up();}).toThrowError('maximum temperature reached')
  })
  it("has a maximum temperature of 32 if power saving mode is off", function(){
    thermostat.powerSaveOff();
    while(thermostat.temperature < 32){
      thermostat.up();
    }
    expect(function(){thermostat.up();}).toThrowError('maximum temperature reached')
  })

});
