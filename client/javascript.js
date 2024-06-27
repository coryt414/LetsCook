const buttons = document.querySelectorAll("button");
let shoppingList = document.querySelector(".shopping-list")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.parentElement.className === "fajitas") {
            shoppingList.textContent = 'Fajitas'
        }
    })
})