
const passwordForm = document.querySelector('#passwordForm');

passwordForm.addEventListener('submit', e => {
    e.preventDefault();

    // console.log('Password:', passwordForm.password.value);

    const password = passwordForm.password.value;
    
    if (password.length >= 16) {
        console.log("This password is 16 or more characters!");
     }
     else if (password.length >= 12 && password.includes("-")) {
         console.log("This password is at least 12 characters with at least 1 dash '-'");
     }
     else if (password.length >= 8 && nbrOfSpecialChars) {
         console.log("This password is at least 8 characters with at least 1 special character!");
     }
     else if (password.length >= 6 && nbrOfSpecialChars >= 2) {
         console.log("This password is at least 6 characters with at least 2 special character!");
     }
     else {
         console.log("Not a good enough password, try again.");
     }


});


const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];


const countSpecialChars = (pwd) => {
	let specialCharsCounter = 0;

	for (i = 0; i < pwd.length; i++) {
		console.log(pwd[i]);
        
        if (specialChars.includes(pwd[i])) {
            specialCharsCounter++;
        }
	}

	return specialCharsCounter;
}

const nbrOfSpecialChars = countSpecialChars(password);
