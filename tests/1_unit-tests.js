const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  suite("Test convertHandler.getNum()", function(){
    test("whole number input", function(done){
      assert.equal(convertHandler.getNum("10L"),10)
      done();
    })
    test("decimal number input", function(done){
      assert.equal(convertHandler.getNum("10.12l"),10.12)
      done();
    })
    test("fractional input", function(done){
      assert.equal(convertHandler.getNum("10/2l"),5)
      done();
    })
    test("fractional input with a decimal", function(done){
      assert.equal(convertHandler.getNum("10.5/2l"),5.25)
      done();
    })
    test("return an error on a double-fraction", function(done){
      assert.equal(convertHandler.getNum("10/2/2l"),"Invalid")
      done();
    })
    test("numerical input of 1 when no numerical", function(done){
      assert.equal(convertHandler.getNum("gal"),1)
      done();
    })
  })
  suite("Test convertHandler.getUnit(input)", function(){
    test("valid input unit", function(done){
      let units = ["1lbs", "1kg", "1l", "1gal", "1km", "1mi"];
      let check = ["lbs", "kg", "L", "gal", "km", "mi"];
      units.forEach((u, i) => assert.equal(convertHandler.getUnit(u), check[i]))
      //units.forEach((u, i) => assert.equal(convertHandler.getUnit(u.toUpperCase()), check[i]))
      done();
    })
    test("error for an invalid input unit", function(done){
      assert.equal(convertHandler.getUnit("test"), "Invalid")
      done();
    })
  })
  suite("Test convertHandler.getReturnUnit(input)", function(){
        test("valid input unit", function(done){
      let units = ["lbs", "kg", "L", "gal", "km", "mi"];
      let check = ["kg", "lbs", "gal", "L", "mi", "km"];
      units.forEach((u, i) => assert.equal(convertHandler.getReturnUnit(u), check[i]))
      //units.forEach((u, i) => assert.equal(convertHandler.getReturnUnit(u.toUpperCase()), check[i]))
      done();
    })
  })
  suite("Test convertHandler.spellOutUnit(input)", function(){
    test("spell outs", function(done){
      let units = ["lbs", "kg", "L", "gal", "km", "mi"];
      let check = ["pounds", "kilograms", "liters", "gallons", "kilometers", "miles"];
      units.forEach((u, i) => assert.equal(convertHandler.spellOutUnit(u), check[i]))
      //units.forEach((u, i) => assert.equal(convertHandler.getReturnUnit(u.toUpperCase()), check[i]))
      done();
    })
  })
  suite("Test convertHandler.convert(num, unit)", function(){
    test('lbs to kg', function(done) {
    assert.approximately(convertHandler.convert(10, 'lbs'),4.53592,0.1); 
    done();
    });
    test('kg to lbs', function(done) {
    assert.approximately(convertHandler.convert(4.53592, 'kg'), 10,0.1); 
    done();
    });
    test('l to gal', function(done) {
    assert.approximately(convertHandler.convert(10, 'l'),2.64172,0.1); 
    done();
    });
    test('gal to l', function(done) {
    assert.approximately(convertHandler.convert(2.64172, 'gal'),10,0.1); 
    done();
    });
    test('km to mi', function(done) {
    assert.approximately(convertHandler.convert(10, 'km'),6.21371,0.1); 
    done();
    });
    test('mi to km', function(done) {
    assert.approximately(convertHandler.convert(6.21371, 'mi'),10,0.1); 
    done();
    });
    
  })

});