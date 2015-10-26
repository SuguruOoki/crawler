// import module
var parseString = require('xml2js').parseString;

// sample data
var xml = "<fruits shop='AAA'>" +
  "<item price='140'>Banana</item>" +
  "<item price='200'>Apple</item>" +
  "</fruits>";

// XML parsing
parseString(xml, function(error, result){
  // if parsing is completed, the result is output
  // console.log(JSON.stringify(result));

  // output the name of fruits shop
  var shop = result.fruits.$.shop;
  console.log('shop=' + shop);

  // display the name and the price of fruits
  var items = result.fruits.item;
  for(var i in items) {
    var item = items[i];
    console.log('-- name=' + item._);
    console.log('   price=' + item.$.price);
  }
});
