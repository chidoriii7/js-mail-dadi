// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// - dichiaro un array con i numeri da 1 a 6 che corrispondono alle facce dei dadi 
const dado = [1, 2, 3 , 4 , 5, 6];

//     -assegnare il primo numero al primo giocatore
let humanPlayer = Math.floor(Math.random() * dado.length + 1)
 //     -assegnare il secondo al computer
let computerPlayer = Math.floor(Math.random() * dado.length +1)

// - fare due tiri prendendo due numeri randomici tra quelli che sono dentro l'array
// for (let tiri = 0; tiri <= 0; tiri++) {

//     let humanPlayer = Math.floor(Math.random() * dado.length + 1)
//     let computerPlayer = Math.floor(Math.random() * dado.length +1)
//     console.log(humanPlayer, computerPlayer)
// }

// - comparare i numeri assegnati
//     -se il numero del giocatore è più alto, vince il primo giocatore
//     -se no vince il computer
//     -se entrambi i numeri sono uguali viene assegnato un pareggio.

if (humanPlayer > computerPlayer) {
    console.log('il tuo numero è:', humanPlayer, 'il numero del computer è:', computerPlayer)
    console.log('hai vinto!')
} else if (humanPlayer < computerPlayer) {
    console.log('il tuo numero è:', humanPlayer, 'il numero del computer è:', computerPlayer)
    console.log('ha vinto il computer')
} else if (humanPlayer === computerPlayer) {
    console.log('il tuo numero è:', humanPlayer, 'il numero del computer è:', computerPlayer)
    console.log('avete pareggiato!')
}






