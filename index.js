//! Alertas de bienvenida al cliente

alert("Bienvenido al simulador de prestamos");
let nombreApellido = prompt("Por favor ingrese su nombre completo");
alert("Bienvenido " + nombreApellido);

//! Variable DNI y ciclo en caso de que no sea un numero

let dni = parseInt(prompt("Por favor ingrese su dni"));

let documento = false;

while (documento === false) {
  if (isNaN(dni)) {
    alert("Por favor ingrese un documento de identidad valido");
    dni = parseInt(prompt("Por favor ingrese su dni nuevamente"));
  } else {
    documento = true;
    alert("Muchas gracias");
  }
}

//! Antigüedad y monto maximo

let antiguedad = prompt("Ingrese los años de antigüedad en su trabajo");
let montoMaximo;

if (antiguedad >= 20) {
  montoMaximo = 500000;
} else if (antiguedad >= 15) {
  montoMaximo = 400000;
} else if (antiguedad >= 10) {
  montoMaximo = 300000;
} else if (antiguedad >= 5) {
  montoMaximo = 200000;
} else {
  montoMaximo = 100000;
}

alert("El monto maximo que el banco puede otorgarle es " + montoMaximo);

//! Solicitamos al usuario el monto del prestamo

let montoPrestamo = parseInt(
  prompt("Por favor ingrese el monto que usted necesita")
);

while (montoPrestamo > montoMaximo) {
  alert(
    "El monto solicitado supera lo que el banco puede otorgarle debido a su antigüedad"
  );
  montoPrestamo = parseInt(
    prompt("Por favor ingrese el monto que usted necesita nuevamente")
  );
}

//! Creacion de la class cliente

class Cliente {
  constructor(id, tasa12, tasa24, tasa36) {
    this.id = id;
    this.tasa12 = tasa12;
    this.tasa24 = tasa24;
    this.tasa36 = tasa36;
  }
}

//! Creacion obj

const clienteSi = new Cliente(1, 20, 30, 50);
const clienteNo = new Cliente(2, 35, 45, 65);

//! Preguntamos al usuario si es cliente del banco o no

let clienteBanco = parseInt(prompt("Usted es cliente del banco?: 1.Si - 2.No"));

//! Variable para condicion del while

let condCliente = false;

//! Variable para la informacion al cliente

let infoCliente;

while (condCliente === false) {
  if (clienteBanco === clienteSi.id) {
    condCliente = true;
    infoCliente = clienteSi;
    alert("Usted obtiene una bonificación especial por ser cliente del banco");
  } else if (clienteBanco === clienteNo.id) {
    condCliente = true;
    infoCliente = clienteNo;
  } else {
    alert("La opción seleccionada no existe");
    clienteBanco = parseInt(prompt("Usted es cliente del banco?: 1.Si - 2.No"));
  }
}


//! Generamos la funcion para los intereses

function calcularCuotaMensual(valor, tasaInteres, meses) {
  const cuota = (valor + (valor * tasaInteres) / 100) / meses;

  return cuota;
}

//! Generamos const y activamos la funcion
const cuota12 = calcularCuotaMensual(montoPrestamo, infoCliente.tasa12, 12);
const cuota24 = calcularCuotaMensual(montoPrestamo, infoCliente.tasa24, 24);
const cuota36 = calcularCuotaMensual(montoPrestamo, infoCliente.tasa36, 36);

//! Respuesta

alert(
  "Usted tiene disponible las siguientes opciones de financiación: en 12 cuotas " +
    cuota12 +
    "- en 24 cuotas: " +
    cuota24 +
    "- en 36 cuotas: " +
    cuota36
);

//! Solicitud de prestamo

let solicitud = parseInt(
  prompt("Desea solicitar el prestamo simulado?: 1.Si - 2.No")
);

//! Variable para condicion del while

let solicitudPrestamo = false;

while (solicitudPrestamo === false) {
  if (solicitud === 1) {
    solicitudPrestamo = true;
    alert("Imposible otorgarle el prestamo, el dinero ha sido robado");
  } else if (solicitud === 2) {
    solicitudPrestamo = true;
    alert("Muchas gracias por utilizar el simulador de prestamos");
  } else {
    alert("La opción seleccionada no existe");
    solicitud = parseInt(
      prompt("Desea solicitar el prestamo simulado?: 1.Si - 2.No")
    );
  }
}
