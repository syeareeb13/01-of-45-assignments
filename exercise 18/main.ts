// Seeing the World: Think of at least five places in the world you’d like to visit
let placeToVisit :string[] = ["Paris", "USA", "Greece", "UK", "Canada"];
//print in original order
console.log("Original Order:" , placeToVisit);
// in alphabetical order
console.log("Alphabetical Order:" , placeToVisit.slice().sort());
// array in orginial order
console.log("Original Order after sorting:" , placeToVisit);
//print array in reverse alphabetical order

console.log("Reverse alphabetical Order:" , placeToVisit.slice().sort().reverse());
//original order
console.log("Original Order after reverse sorting:" , placeToVisit);
//reverse the order of list
placeToVisit.reverse();
console.log("Reverse Order:", placeToVisit);
//reverse the order again
placeToVisit.reverse();
console.log("Back to original order:", placeToVisit);
//sort array in alphabetical order
console.log("Sorted in Alphabetical Order:" , placeToVisit.slice().sort());
// reverse alphabetical order
console.log("stored in Reverse alphabetical Order:" , placeToVisit.slice().sort().reverse());

