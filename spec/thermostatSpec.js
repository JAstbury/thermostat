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
});
