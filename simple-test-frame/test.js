var test = function() {
    collectAllTest(arguments).forEach(function(eachTest) {
        eachTest();
        process.stdout.write(".");
    });
    console.log();
};

test.isEqual = function(a, b) {
    if(a !== b) {
        throw a + " and " + b + " are not equal, my dear.";
    }
}

var collectAllTest = function(args) {
    return Array.prototype.slice.call(args).filter(function(x, i) {
        return i % 2 === 1;
    });
}

module.exports = test;