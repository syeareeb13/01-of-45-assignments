//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.



let userNames = ["Ali", "Areeba", "Admin", "Syeda", "Daain"]
userNames = []
if(userNames.length === 0) {
    console.log("We need to find some users!");
} else {
    userNames.forEach(oneUser =>  {
        if ( oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}