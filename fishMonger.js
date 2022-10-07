//define function mongerInventory
//check if fish's quantity is less than 10
//if so, buy = false
//if greater, buy = true
//if higher than 7.50, buy = false, else = true
//each fish object should have a quantity of 10 
const { boatInventory } = require("./fishingBoat.js")

const buyFish = boatInventory()

const mongerInventory = () => {
    let fishArray = []
    for (const fish of buyFish) {
        if (fish.amount > 10 && fish.price < 7.50) {
            fishArray.push(fish)
        }
    }
    return fishArray
}

module.exports = { mongerInventory }


