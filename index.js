name = prompt("Before we get started, tell me your name!")

let score = 0

let questionOne = prompt(`How old is Geisel Bugenhagen in Cosmo Canyon?
    [a] 87
    [b] 130
    [c] 102`);

let string

if (questionOne === "a" || questionOne === "b" || questionOne === "c") {
    if (questionOne === "b") {
        string = "Hell yeah!"
        score += 1
    } else {
    string = "Oof, let's move on."
    }
} else {
    string = "Try entering a, b, or c!"
}
alert(string)

let questionTwo = prompt(`Which FFVII boss can you steal a weapon for Yuffie from?
    [a] Diamond Weapon
    [b] Ruby Weapon
    [c] Emerald Weapon`);   

if (questionTwo === "a" || questionTwo === "b" || questionTwo === "c") {
    if (questionTwo === "a") {
        string = "Way to go!"
        score += 1
    } else {
    string = "Yikes...ok."
    }
} else {
    string = "Try entering a, b, or c!"
}
alert(string)

let questionThree = prompt(`In Midgar, which sector is Aerith from?
    [a] Sector 7
    [b] Sector 5
    [c] Sector 4`);   

if (questionThree === "a" || questionThree === "b" || questionThree === "c") {
    if (questionThree === "b") {
        string = "Nice!"
        score += 1
    } else {
    string = "No worries, there's always next time."
    }
} else {
    string = "Try entering a, b, or c!"
}
alert(string)

if (score===3) {
    alert(`Way to go ${name}!  You got ${score} out of 3 correct!`)
} else if (score===1 || score===2) {
    alert(`Nice work ${name}! You got ${score} out of 3 correct! `)
} else {
    alert(`Damn...maybe try again ${name}?  You got ${score} correct this time.`)
}