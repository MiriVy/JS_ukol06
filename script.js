const justFood = (pocetLidi) => {
    return "catering od Just Food pro " + pocetLidi + " lidí za " + (pocetLidi * 200) + " Kč"
}

const yourMama = (pocetLidi) => {
    return `catering od Your Mama pro ${pocetLidi} lidí za ${(pocetLidi * 1000)} Kč`
}

const flavourHaven = (pocetLidi) => {
    return `catering od Flavour Haven pro ${pocetLidi} lidí za ${(pocetLidi * 2000)} Kč`
}

console.log(justFood(10))
console.log(yourMama(10))
console.log(flavourHaven(10))

const createEvent = (udalost, pocetLidi, catering) => {
    return `Událost ${udalost} a ${catering(pocetLidi)}`
}

document.body.innerHTML += createEvent("svatba Novákovi", 100, yourMama) 
document.body.innerHTML += "<br />"
document.body.innerHTML += createEvent("firemní večírek", 1000, justFood)
document.body.innerHTML += "<br />"
document.body.innerHTML += createEvent("ples", 1000, flavourHaven)

