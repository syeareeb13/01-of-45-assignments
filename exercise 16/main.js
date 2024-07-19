"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Ahmed", "Daain", "Amna"];
console.log("Great news! We found a bigger table");
//unshift()
guestList.unshift("Alia");
//console.log(guestList);
//splice()
guestList.splice(Math.floor(guestList.length / 2), 0, "Haya");
//console.log(guestList);
//push
guestList.push("Areeba");
//console.log(guestList);
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you all are invited to the dinner.`);
});
