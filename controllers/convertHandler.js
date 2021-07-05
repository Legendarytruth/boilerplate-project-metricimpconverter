function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    //console.log(input)
    if(/^([^0-9]*)$/.test(input)){
      return 1;
    }
    result = input.substring(0, input.search(/[a-zA-Z]/))
    if (result == ""){
      return "Invalid"
    }
    else if(result.includes("/")){
      if(result.includes("/", result.indexOf("/") + 1)){
        return "Invalid"
      }
      s = result.split('/')
      result = parseFloat(s[0])/parseFloat(s[1])
    }else{
      result = parseFloat(result)
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let units = ["lbs", "kg", "l", "gal", "km", "mi"];
    let result = input.substring(input.search(/[a-zA-Z]/)).toLowerCase();
    console.log(result)
    if(units.includes(result)){
      if(result === "l"){
        return result.toUpperCase();
      }else{
        return result
      }
    }else{
      return "Invalid"
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit.toLowerCase()){
      case 'kg': 
        result = 'lbs'; 
        break;
      case 'lbs': 
        result = 'kg'; 
        break;
      case 'l': 
        result = 'gal'; 
        break;
      case 'gal':
        result = 'L'; 
        break;
      case 'km': 
        result = 'mi'; 
        break;
      case 'mi': 
        result = 'km'; 
        break;
      default: 
        result = 'invalid unit';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit.toLowerCase()){
      case 'l': 
        result = 'liters'; 
        break;
      case 'lbs': 
        result = 'pounds'; 
        break;
      case 'gal': 
        result = 'gallons'; 
        break;
      case 'kg': 
        result = 'kilograms'; 
        break;
      case 'km': 
        result = 'kilometers'; 
        break;
      case 'mi': 
        result = 'miles'; 
        break;
      default: 
        result = unit;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit.toLowerCase()){
      case 'l': 
        result = initNum /galToL; 
        break;
      case 'gal': 
        result = galToL * initNum; 
        break;
      case 'lbs': 
        result = lbsToKg * initNum; 
        break;
      case 'kg': 
        result = initNum / lbsToKg; 
        break;
      case 'km': 
        result = initNum /miToKm; 
        break;
      case 'mi': 
        result = miToKm * initNum;
        break;
      default: 
        result = initNum;
    }
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
