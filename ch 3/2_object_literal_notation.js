// this keyword to refer to caller object

var game = {
    name: "Resident Evil 2",
    initialPrice: 244.3,
    discount: 0.02,
    getPrice: function () {
        return this.discount * this.initialPrice;
    }
};

console.log(game);
console.log(game.name);
console.log(game.getPrice());

// sq bracket
console.log(game["initialPrice"]);
console.log(game["getPrice"]());
