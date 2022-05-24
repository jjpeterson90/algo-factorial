exports.factorial = function(num, fact) {
    if (num === 0 || num === 1) return 1;
    return num * fact.factorial(num-1, fact);
};
