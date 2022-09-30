//Evaluar la funcion y sus derivadas

// f(x) = (x-3)(x-1)^2
// f(x) = x^3 - 5x^2 + 7x - 3
function defFun(Xo){
    return Math.pow(Xi,3) - 5 * Math.pow(Xi,2) + 7*Xi -3;
}

// f'(x) = 3x^2 - 10x + 7
function dxFun(Xo) {
    return 3 * Math.pow(Xi,2) - 10 * Xi + 7;
}

//f''(x) = 6x - 10
function dx2Fun(Xo) {
    return 6 * Xi - 10;
}

//Calcular la siguiente raiz
function SigXi(Xo){
    return(
        Xo - (defFun(Xo) * dxFun(Xo))/
        ((Math.pow(dxFun(Xo),2)) - (defFun(Xo) * dx2Fun(Xo)))
    );
}

//Calcular el Error %
// Error = ((Xi - Xo)/Xi) * 100
function Error(Xi, Xo){
    return Math.abs(((Xi - Xo) / Xi) * 100);
}

const errorDeseado = Number(document.querySelector(".inputErr")); //Error deseado por el usuario
let errorActual = 100; // Error actual de 100%
let Xo = Number(document.querySelector(".inputXo")); //Punto inicial //2
let i = 1; //Iteraciones

//Ciclo iterativo
while (errorActual > errorDeseado) {

    console.log("Iteracion: ", i);
    defFun(Xo);
    dxFun(Xo);
    dx2Fun(Xo);

    let Xi = SigXi(Xo); //1,6
    if(i != 1){
        Error(Xi, Xo);
    }

    Xo = Xi; //Xo = 1,6
    i++;
}