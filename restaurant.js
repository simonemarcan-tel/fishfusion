const { mongerInventory } = require("./fishMonger.js")

const createMenu = mongerInventory()

const fishMenu = () => {
    let createMenuHTMLSection = `<h1>Menu</h1>
    <article class="menu">
        <h2>Tuna</h2>
        <section class="menu__item">Tuna Soup</section>
        <section class="menu__item">Tuna Sandwich</section>
        <section class="menu__item">Grilled Tuna</section>
    </article>`

    return createMenuHTMLSection
}
const stringReturnedFromFunction = fishMenu(createMenu)
console.log(stringReturnedFromFunction)