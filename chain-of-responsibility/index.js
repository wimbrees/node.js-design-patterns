var Store = require('./Store');
var inventory = require('./inventory');

var skiShop = new Store('Steep and Deep', inventory);

var searchItem = 'ski poles';
var results = skiShop.find(searchItem);
console.log(results);

searchItem = 'powder skis';
results = skiShop.find(searchItem);
console.log(results);

searchItem = 'bread';
results = skiShop.find(searchItem);
console.log(results);