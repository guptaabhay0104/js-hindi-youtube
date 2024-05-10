const accountId = 13343;
let accountEmail = "abhayg1801@gmail.com"
var accountPassword = "12345";
accountCity = "New Delhi";

//prefer not to use var because of the block scope and functional scope
accountEmail = "abhay0104@gmail.com";
accountPassword = "24234";
accountCity = "Bengaluru";

console.table([accountEmail,accountId,accountPassword,accountCity]);
