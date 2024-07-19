"use strict";
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Makkah", "Saudi Arabia"));
