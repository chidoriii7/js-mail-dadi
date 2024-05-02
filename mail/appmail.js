const registroEmail = ['sasasa@gmail.com', 'dadada@gmail.com', 'fafafa@gmail.com'];
let miaEmail = prompt('inserire la tua email');
let validationOK = false;


for(let i = 0; i < registroEmail.length; i++ ) {

    if ( miaEmail === registroEmail[i]) {
        console.log('l email è presente nell array');
        validationOK = true
        break;
    } 
}

if (!validationOK) {
    console.log('l email non è presente nell array');
}
