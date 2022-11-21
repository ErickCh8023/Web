//Botton listener
function buttonListener() {
  const boton = document.querySelector("#enviar");
  boton.addEventListener("click", integration);
}

function integration() {
  let example = document.querySelector('input[name="example_select"]:checked').value;

  switch (example) {
    case 'example_1':
        example1()
        break;
    case 'example_2':
        example2()
        break;

    default:
        break;
  }
  //console.log(example)
}

function example1() {
    let xPoints = [0, 0.06, 0.12, 0.24, 0.36, 0.48, 0.72, 0.8];
    let yPoints = [0.2, 1.1, 1.31, 1.34, 2.09, 3.21, 2, 0.18];
    let aprox = simpsonTercio(xPoints, yPoints) + simpsonOctavo(xPoints, yPoints) + trapecio(xPoints, yPoints);
    crearTabla(simpsonTercio(xPoints, yPoints), simpsonOctavo(xPoints, yPoints), trapecio(xPoints, yPoints), aprox);

}

function simpsonTercio(xPoints, yPoints) {
    const h = (xPoints[1] - xPoints[0]);
    const simpson = (h/3)*(yPoints[0] + 4*yPoints[1] + yPoints[2]);
    return simpson;
}

function simpsonOctavo(xPoints, yPoints) {
    const h = (xPoints[5] - xPoints[4]);
    const simpson = ((3*h)/8)*(yPoints[2] + 3*yPoints[3] + 3*yPoints[4] + yPoints[5]);
    return simpson;
}

function trapecio(xPoints, yPoints){
    let h = 0;
    let trap = 0;
    h = Math.abs(xPoints[5] - xPoints[6]);
    console.log(h);
    trap += (h*((yPoints[5]+yPoints[6])/2));
    h = Math.abs(xPoints[6] - xPoints[7]);
    console.log(h);
    trap += (h * ((yPoints[6]+yPoints[7])/2));
    return trap;
}

function example2() {
    let xPoints = [0, 0.1, 0.3, 0.5, 0.7, 0.95, 1.2];
    let yPoints = [0, 6.84, 4, 4.2, 5.51, 5.77, 1];
    let aprox = trap(xPoints, yPoints) + simpOctavo(xPoints, yPoints) + simpTer(xPoints, yPoints);
    //console.log(aprox);
    crearTabla(trap(xPoints, yPoints), simpOctavo(xPoints, yPoints), simpTer(xPoints, yPoints), aprox);
    return aprox;
}

function simpTer(xPoints, yPoints){
    const h = (xPoints[6] - xPoints[5]);
    const simpson = (h/3)*(yPoints[4] + 4*yPoints[5] + yPoints[6]);
    return simpson;
}

function simpOctavo(xPoints, yPoints){
    const h = (xPoints[4] - xPoints[3]);
    const simpson = (3*h/8)*(yPoints[1] + 3*yPoints[2] + 3*yPoints[3] + yPoints[4]);
    return simpson;
}

function trap(xPoints, yPoints) {
    const h = (xPoints[1] - xPoints[0]);
    const trapp = h*((yPoints[0]+yPoints[1])/2);
    return trapp;
}

function crearTabla(I1, I2, I3, Total) {
    let columnas = [I1, I2, I3, Total];
    let filaActual = document.querySelector('#tabla').insertRow(1);
    for (let index = 0; index < 4; index++) {
        let celda = filaActual.insertCell(index);
        celda.innerHTML = columnas[index];
    }
}



window.onload = buttonListener();
