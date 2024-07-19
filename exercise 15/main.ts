// exercise 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList : string[] = ["Ali", "Ahmed", "Daain"]

// print the name who is not invited to the dinner
let unableAttend : string = guestList.splice(0,1)[0];
console.log(`${unableAttend} not invited to the dinner`);
console.log(guestList);

//push
guestList.push("Amna")
//print a message
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to the dinner.`);
})