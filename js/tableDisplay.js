//Listener del botón
function listenerBoton(){
    const boton = document.querySelector("#enviar");
    boton.addEventListener("click", metodoRaices);
}

function metodoRaices(){

    let errorDeseado = document.querySelector(".inputErr").value; //Error deseado por el usuario
    let errorActual = 100.0; // Error actual de 100%
    let Xo = document.querySelector(".inputXo").value; //Punto inicial //2
    let i = 1; //Iteraciones


    //Ciclo iterativo
    while (errorActual > errorDeseado) {

        console.log("Iteracion: ", i);
        defFun(Xo);
        dxFun(Xo);
        dx2Fun(Xo);

        let Xi = SigXi(Xo); //1,6
        if(i != 1){
            errorActual = Error(Xi, Xo);
        }
        alert("Raiz siguiente: "+Xi +"\nError actual: "+errorActual);
        if(errorActual < errorDeseado){
            break;
        }
        crearTabla(i, Xo, defFun(Xo), dxFun(Xo), dx2Fun(Xo), SigXi(Xo), errorActual);
        Xo = Xi; //Xo = 1,6
        i++;
    }

    //Crear la tabla
    function crearTabla(i, Xo, defFun, dxFun, dx2Fun, xi, error){

        let columnas = [i, Xo, defFun, dxFun, dx2Fun, xi, error];
        let contador = 1;
        for(let j = 0; j < i; j++){
            let filaActual = document.querySelector("#tabla").insertRow(i);

            for(let k = 0; k < 7; k++){
                if(k == 0){
                    let celda = filaActual.insertCell(k);
                    celda.innerHTML = contador;
                    contador++;
                }else{
                    let celda = filaActual.insertCell(k);
                    celda.innerHTML = columnas[k];
                }
            }
        }
    }

    //Evaluar la funcion y sus derivadas

    // f(x) = (x-3)(x-1)^2
    // f(x) = x^3 - 5x^2 + 7x - 3
    function defFun(Xo){
        return Math.pow(Xo,3) - 5 * Math.pow(Xo,2) + 7*Xo -3;
    }

    // f'(x) = 3x^2 - 10x + 7
    function dxFun(Xo) {
        return 3 * Math.pow(Xo,2) - 10 * Xo + 7;
    }

    //f''(x) = 6x - 10
    function dx2Fun(Xo) {
        return 6 * Xo - 10;
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


    /*function mandarTabla(i, Xo, defFun, dxFun, dx2Fun, xi, error){
        let tabla = document.querySelector("#tabla");
        let tr = document.createElement('tr');
        let array = [i, Xo, defFun, dxFun, dx2Fun, xi, error];

        for(let j = 0; j < 7; i++){
            //Creación de etiquetas
            let td = document.createElement('td');
            //Creación de texto
            td.appendChild(document.createTextNode(array[j]));
            tr.appendChild(td);
        }

    }

    function mandarT(){
        document.querySelector(".divTabla").innerHTML(
        "<table>"
        ,"<th>Iteración</th>",
        "<th>Xo</th>",
        "<th>F(Xo)</th>",
        "<th>F'(Xo)</th>",
        "<th>F''(Xo)</th>",
        "<th>X<sub>o+1</sub></th>",
        "<th>Error (%)</th>",
        "</table>");
    }*/
}

window.onload = listenerBoton;