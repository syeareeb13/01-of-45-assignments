"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(...items) {
    console.log("\nmaking the sandwish with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow enjoy sandwich");
}
makeSandwich("Bread", "Butter");
makeSandwich("Chicken", "Cheese", "Egg");
makeSandwich("Bread", "Butter", "Tomato", "Chicken", "Cheese", "Egg", "Mayo");
