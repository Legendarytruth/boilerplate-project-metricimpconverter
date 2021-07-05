'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert')
  .get(function(req, res){
    console.log("TTT " + req.query.input)
    let inputNum = convertHandler.getNum(req.query.input)
    let inputUnit = convertHandler.getUnit(req.query.input)
    if(inputNum === "Invalid" && inputUnit === "Invalid"){
      res.send("invalid number and unit")
    }
    if(inputNum === "Invalid"){
      res.send("invalid number")
    }
    else if (inputUnit === "Invalid"){
      res.send("invalid unit")
    }else{
    let resultNum = convertHandler.convert(inputNum, inputUnit);
    let resultUnit = convertHandler.getReturnUnit(inputUnit);
    let resultString = convertHandler.getString(inputNum, inputUnit, resultNum, resultUnit);
    res.json({
      initNum: inputNum,
      initUnit: inputUnit,
      returnNum: resultNum,
      returnUnit: resultUnit,
      string: resultString
    })
    }
  })
};
