"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Ali", "ahmed", "Daain", "sana", "Sam"];
let new_users = ["Ayesha", "Omer", "Ahmed", "Amna", "Sana",];
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This username ${new_one_user} is available.`);
    }
});
