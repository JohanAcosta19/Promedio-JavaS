function calcularPromedio(arreglo) {
    if (arreglo.length === 0) {
      return 0;
    }
    const suma = arreglo.reduce((acumulador, elemento) => acumulador + elemento, 0);
    const promedio = suma / arreglo.length;
  
    return promedio;
  }
  const miArreglo = [98, 72, 40, 10, 99, 108, 22, 87, 88, 12, 15, 74, 66];
  const promedio = calcularPromedio(miArreglo);
  console.log("El promedio de los elementos del arreglo es: " + promedio);