var products = [
    {id : 7, name : 'Pen', cost : 40, units : 30, category : 'stationary'},
    {id : 2, name : 'Ten', cost : 70, units : 20, category : 'grocery'},
    {id : 9, name : 'Den', cost : 20, units : 40, category : 'stationary'},
    {id : 4, name : 'Len', cost : 60, units : 50, category : 'stationary'},
    {id : 5, name : 'Zen', cost : 50, units : 30, category : 'grocery'}
]

//find the stationary products (use the 'filter' method)
var stationaryProducts = products.filter(function(product){
    return product.category === 'stationary'
});

//sort the products by cost (use the 'sort' method)
products.sort(function(p1, p2){
    return p1.cost - p2.cost
});

//find the maximum cost from the products list (use the reduce method)
var maxCost = products.reduce(function(p1, p2){
    return p1.cost > p2.cost ? p1.cost : p2.cost;
});

//create a new products array with the cost reduced by 10% (use the map method)
var discountedProducts = products.map(function(product){
    return {
        id : product.id, name : product.name, cost : product.cost * 0.9, units : product.units, category : product.category
    };
});

//print the 'name' and 'units' of all the products without using the for/while loop (use the forEach method)
products.forEach(function(product){
    console.log(product.name, product.units);
});