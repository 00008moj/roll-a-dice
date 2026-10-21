function diceRoll() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const total = document.getElementById("total");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice/${value}.png">`);
    }

    function addTotal(...values) {
        let sum = 0;
        for(let value of values) {
            sum += value;
        }
        return sum;
    }
    let totals = addTotal(...values);

    diceResult.textContent = `Dice Rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
    total.textContent = `Total: ${totals}`;

}