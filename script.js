let num1 = 0;
let num2 = 0;

document.getElementById("scoreA").textContent = num1;
document.getElementById("scoreB").textContent = num2;

let teamA = document.getElementById("scoreA")
let teamB = document.getElementById("scoreB")

function teamA1() {
    num1 += 1;
    teamA.textContent = num1;
}

function teamA3() {
    num1 += 3;
    teamA.textContent = num1;
}

function teamA5() {
    num1 += 5;
    teamA.textContent = num1;
}

function teamB1() {
    num2 += 1;
    teamB.textContent = num2;
}

function teamB3() {
    num2 += 3;
    teamB.textContent = num2;
}

function teamB5() {
    num2 += 5;
    teamB.textContent = num2;
}

function reset(){
    scoreA.textContent = 0;
    scoreB.textContent = 0;
    num1 = 0;
    num2 = 0;
}