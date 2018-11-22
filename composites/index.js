var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var group_food = new CatalogGroup('Food for while you try on clothes', [
    new CatalogItem('Milkshake', 5.99),
    new CatalogItem('French Fries', 3.99)
]);

var group_shoes = new CatalogGroup('Shoes and such', [boots, sneakers, flipFlops]);

var keychain = new CatalogItem('Key Chain', 1.99);

var catalog = new CatalogGroup('Clothes and Food', [keychain, group_shoes, group_food]);

catalog.print();
console.log(`\nTotal: $${catalog.total}`);