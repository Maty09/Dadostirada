function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function simularLanzamientosDeDados(cantidad) {
  return Array.from({ length: cantidad }, () => {
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();
    return dado1 + dado2;
  });
}

function contarApariciones(resultados) {
  const conteo = {};
  resultados.forEach((resultado) => {
    if (conteo[resultado]) {
      conteo[resultado]++;
    } else {
      conteo[resultado] = 1;
    }
  });
  return conteo;
}

const cantidadLanzamientos = prompt("Ingrese la cantidad de veces que desea lanzar los dados:");
const resultados = simularLanzamientosDeDados(cantidadLanzamientos);
const conteo = contarApariciones(resultados);

console.log("Resultados de los lanzamientos:");
console.table(resultados, ["Suma"]);

console.log("Conteo de apariciones:");
console.table(conteo, ["Suma", "Apariciones"]);
