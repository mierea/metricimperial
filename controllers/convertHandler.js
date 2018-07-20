/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {  
    var arr = input.match(/^[\d.|\/]+/)
    if(arr != null && arr.length > 0) {
      try {
        var result = arr[0];
        if(result.split('/').length-1 > 1) {
          throw 'invalid number'; 
        }
        return eval(result);
      } catch(err) {
         //console.log(err)
         return 'invalid number';
      }

    }
    return 1; 
  };
  
  this.getUnit = function(input) {
    var arr = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var result;
    
    if(input.match(/[a-zA-Z]+/).length > 0 && arr.indexOf(input) != -1) {
      return input;
    }
    
    try {
      result = input.match(/[a-zA-Z]+/)[0];
      if(arr.indexOf(result) == -1) {
        throw "invalid unit";
      }
      
    } catch(err) {
      //console.log(err)
      result = 'invalid unit'
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','L','mi','km','lbs','kg'];
    var output = ['l','gal','gal','km','mi','kg','lbs'];  
    var result = output[input.indexOf(initUnit)];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
      switch(unit) {
        case 'gal': result = "gallons"; break;
        case 'lbs': result = "pounds"; break;
        case 'mi':   result = "miles"; break;
        
        case 'l':
        case 'L':
          result = "liters"; break;
        case 'kg': result = "kilograms"; break;
        case 'km':result = "kilometers"; break;
      default:
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit) {
      case 'gal': result = initNum * galToL; break;
      case 'lbs': result = initNum * lbsToKg; break;
      case 'mi':  result = initNum * miToKm; break;
        
      case 'l':
      case 'L':
        result = initNum / galToL; break;
      case 'kg': result = initNum / lbsToKg; break;
      case 'km': result = initNum / miToKm; break;
      default:
        break;
    }
    try {
      if(result % 1 == 0) {
        return Number(result);
      } else {
        return Number(result.toFixed(5));
      }
    } catch(err) {
        //console.log(err);
        return 'invalid unit'; 
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    //console.log(initNum + " " + initUnit + " " + returnNum + " " + returnUnit);
  


    
    var result = {
     initNum: initNum,
      initUnit: initUnit,
      returnNum: Number(returnNum),
      returnUnit: returnUnit,
      string: initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit)
    };
    
    return result;
  };
  
}

module.exports = ConvertHandler;
