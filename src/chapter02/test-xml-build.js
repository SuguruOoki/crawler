// import module
var xml2js = require('xml2js');

// base object
var obj = {
  item : { name: 'banana', price: 150 }
};

// convert XML
var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);
console.log(xml);
