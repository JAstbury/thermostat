// <<<<<<< HEAD
// 'use strict';
//
// describe('Thermostat', function(){
//   var thermostat
//
//   beforeEach(function(){
//     thermostat = new Thermostat
//   });
//
//   it('has a default temp of 20', function(){
//     expect(thermostat.temperature).toBe(20)
//   });
//
//   it('has a minimum tempterature of 10 degrees', function(){
//     for (var temp = 1; temp <=10; temp ++) {
//       thermostat.downButton()
//     }
//     expect(function(){thermostat.downButton();}).toThrowError('temp too low')
//   });
//
//   it('can increase by 1 degree using the up button', function(){
//     thermostat.upButton()
//     expect(thermostat.temperature).toBe(21)
//   });
//
//   it('can be decrease by 1 degree using the down button', function(){
//     thermostat.downButton()
//     expect(thermostat.temperature).toBe(19)
//   });
//
//   it('has a power saving mode where max temp is 25', function(){
//     for (var temp = 1; temp <=5; temp ++) {
//       thermostat.upButton()
//     }
//     expect(function(){thermostat.upButton();}).toThrowError('temp too high')
//   });
//
//   it('has power save on by default', function(){
//     expect(thermostat.powerSave).toBe(true)
//   });
//
//   it('can turn off power save mode', function(){
//     thermostat.powerSaveOff()
//     expect(thermostat.powerSave).toBe(false)
//   })
//   it('can turn power save mode back on', function(){
//     thermostat.powerSaveOff()
//     thermostat.powerSaveOn()
//     expect(thermostat.powerSave).toBe(true)
//   })
//
//   it('when power save is off, max temp is 32', function(){
//     thermostat.powerSaveOff()
//     for (var temp = 1; temp <=12; temp ++) {
//       thermostat.upButton()
//     }
//     expect(function(){thermostat.upButton();}).toThrowError('temp too high')
//   });
//
//   it('has reset button', function(){
//     thermostat.upButton();
//     thermostat.reset();
//     expect(thermostat.temperature).toEqual(20)
//   })
//
//   it('starts at medium usage', function(){
//     expect(thermostat.colour()).toEqual('Orange')
//   })
//
//   it('starts at medium usage', function(){
//     expect(thermostat.energyUsage()).toEqual('medium-usage')
//   })
//
//
// =======
describe("thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("increases the temperature with the up button", function(){
    thermostat.up();
    expect(thermostat.temperature).toBeGreaterThan(20);
  });

  it("decreases the temperature with the down button", function(){
    thermostat.down();
    expect(thermostat.temperature).toBeLessThan(20);
  });

  it("has a minimum temperature of 10 degrees", function(){
    while(thermostat.temperature > 10){
      thermostat.down();
    }
    expect(function(){thermostat.down();}).toThrowError('minimum temperature reached');
  });

  it("has power saving mode on by default", function(){
    expect(thermostat.powerSave).toEqual(true);
  });

  it("has maximum temperature of 25 on power saving mode", function(){
    while(thermostat.temperature < 25){
      thermostat.up();
    }
    expect(function(){thermostat.up();}).toThrowError('maximum temperature reached');
  });

  it("has a maximum temperature of 32 if power saving mode is off", function(){
    thermostat.powerSaveOff();
    while(thermostat.temperature < 32){
      thermostat.up();
    }
    expect(function(){thermostat.up();}).toThrowError('maximum temperature reached');
  });

  it("resets the temperature to 20 when the reset button is used", function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("returns green if temperature is less than 18", function(){
    while(thermostat.temperature > 18 ){
      thermostat.down();
    }
    expect(thermostat.energy()).toEqual("Green");
  });

  it("returns yellow if temperature is more than 18 but less than 25 ", function(){
    expect(thermostat.energy()).toEqual("Yellow");
  });

  it("returns red if temperature is more than 25", function(){
    thermostat.powerSaveOff();
    while(thermostat.temperature < 25 ){
      thermostat.up();
    }
    expect(thermostat.energy()).toEqual("Red");
  });
// >>>>>>> day-2
});
