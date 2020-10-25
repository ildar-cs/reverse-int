module.exports = function reverse(n) {
    if (n.toString().startsWith("-"))
        newNumber = n.toString().split("").slice(1).reverse().join("");
    else newNumber = n.toString().split("").reverse().join("");

    return parseInt(newNumber);
};
