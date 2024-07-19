"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guest
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Alia", "Ahmed", "Daain", "Haya", "Amna", "Areeba"];
//print message
console.log("Unfortunately! the new dinner table won't arrive so we can invite only two guests.");
//remove a guest
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, we can't invite you.`);
    }
}
//console.log(guestList);
//print a message of inviting the those two guests
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to the dinner.`);
});
//remove last two names from list
guestList.splice(0, guestList.length);
//print updated empty list
console.log("Updated list of guest:", guestList);
