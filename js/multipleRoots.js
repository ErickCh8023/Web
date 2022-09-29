// f(x) = (x-3)(x-1)^2
// f(x) = x^3 - 5x^2 + 7x - 3
function defFun(Xi){
    return Math.pow(Xi,3) - 5 * Math.pow(Xi,2) + 7
}

// f'(x) = 3x^2 - 10x + 7
function dxFun(Xi) {
    return 3*(Xi)**2
}

//f''(x) = 6x - 10
