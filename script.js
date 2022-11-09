
/*let nome = prompt("Inserisci il nome");
let cognome = prompt("Inserisci il cognome");
let colorepref = prompt("Inserisci colore preferita");
let num1 = prompt("Inserisci numero per devidere");
let num2 = prompt("Inserisci numero che devide");
let dev = parseInt(num1)/parseInt(num2);
let pwrd;
console.log(nome+cognome+colorepref+dev);
pwrd = nome+cognome+colorepref+dev;  */

let passwrdbtn = document.getElementById("password-button");

passwrdbtn.addEventListener('click', function(){

    let nome = document.getElementById("p-nome").value;
    let cognome = document.getElementById("p-conome").value;
    let colorepref = document.getElementById("p-color").value;
    let num1 = document.getElementById("dnum1").value;
    let num2 = document.getElementById("dnum2").value;
    let dev = parseInt(num1)/parseInt(num2);
    let pwrd = nome + cognome + colorepref + dev; 
    console.log(pwrd);
    console.log(cognome);
    console.log(colorepref);
    console.log(pwrd);

    document.getElementById("p-password").innerHTML = "La tua password è: " + pwrd;
});




/*
document.getElementById("p-nome").innerHTML = "Nome: " + nome;
document.getElementById("p-cognome").innerHTML = "Cognome: " + cognome;
document.getElementById("p-color").innerHTML = "Colore preferita: " + colorepref;
document.getElementById("pwd").innerHTML= "Password: "+ pwrd;
*/