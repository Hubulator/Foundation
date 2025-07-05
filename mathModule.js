function adder(x, y) {
    return x + y;
}

function logger(result) {
    printLine(result);
}

function printLine(message) {
    console.log("Result: " + message);
}

module.exports = { adder, logger };