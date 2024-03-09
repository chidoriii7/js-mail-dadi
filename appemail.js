//Mail

const emails = ["sasasasa@sasa.it", "dadadada@adad.it", "papapa#apap.com"];

const domElementbtn = document.querySelector ("search")


domElementbtn.addEventListener('click', function () {



const userEmail = document.getElementById('user email');
let arrayEmail = false;

for(let index = 0; index < emails.length; index += 1) {
    const email = emails [index];
    console.log(email)

    if (userEmail === email) {
        arrayEmail = true;
    }
}

if (arrayEmail === true ) {
    console.log('presente');
} else {
    console.log('non presente');
}
});