// 1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se 
// deberá imprimir en pantalla

let argumentoUno = Number(prompt('Ingrese el primer argumento:'));
let argumnetoDos = Number(prompt('Ingrese el segundo argumento:'));
let preguntaUno = argumentoUno + argumnetoDos;
document.write(`El resultado es: ${preguntaUno} <br>`);

// 2. Un estudiante realiza 4 exámenes, calcular el promedio de estos

let examenUno = Number(prompt('Ingrese la Nota del primer examen:'))
let examenDos = Number(prompt('Ingrese la Nota del segundo examen:'))
let examenTres = Number(prompt('Ingrese la Nota del tercer examen:'))
let examenCuatro = Number(prompt('Ingrese la Nota del cuarto examen:'))
let sumaExamenes = examenUno + examenDos + examenTres + examenCuatro;
let promedio = sumaExamenes / 4;
document.write(`El promedio es: ${promedio}<br>`);

//3.Calcular el área de un rectángulo

let altura = Number(prompt('Ingrese la altura del rectángulo:'));
let base = Number(prompt('Ingrese la base del rectángulo:'));
let area = altura * base;
document.write(`El área del rectángulo es: ${area}<br>`);

//4. Calcular el área de un triángulo

let baseT = Number(prompt('Ingre la base del triángulo'));
let alturaT = Number(prompt('Ingrese la altura del triángulo'));
let areaT = (baseT * alturaT) / 2;
document.write(`El área del triángulo es: ${areaT}<br>`);

//5. Calcular el área de una circunferencia

const pi = 3.14;
let radio = Number(prompt('Ingrese el radio de la circunferencia'));
let radioExponente = Math.pow(radio, 2);
let areaCirc = pi * radioExponente;
document.write(`El área de la circunferencia es: ${areaCirc}<br>`);

// 6.Determinar el sueldo semanal de un trabajador basándose en sus horas 
// trabajadas y su salario de hora hombre

let horasTrab = Number(prompt('Ingrese las horas trabajadas'));
let salarioHoraHombre = Number(prompt('Ingrese el salario de horas hombre'));
const diasSemana = 7;
let sueldoSemanal = horasTrab * salarioHoraHombre * 7;
document.write(`El suldo semanal de un trabajador es: ${sueldoSemanal}<br>`);

//7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. 
// Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, 
// pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en 
// los metros que requiere. Represéntelo mediante el diagrama de flujo y el 
// pseudocódigo(1 pulgada = 0.0254 m)

let metros = Number(prompt('Ingrese los metros de tela'));
const unaPulgada = 0.0254;
let pulgadasAPedir = (metros / unaPulgada);
let redondeoADosDecimales = pulgadasAPedir.toFixed(2);
document.write(`Las pulgadas que debe pedir es: ${redondeoADosDecimales}<br>`);

//8. Una empresa importadora desea determinar cuántos dólares puede adquirir 
//con equis cantidad de dinero peruano

let dolares = Number(prompt('Ingrese el número de dolares'));
const cambioSoles = 3.81;
let dineroPeruano = dolares * cambioSoles;
document.write(`La cantidad de dinero en dinero peruano es: ${dineroPeruano}<br>`);

// 9. Una empresa que contrata personal requiere determinar la edad de las 
// personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se 
// les pregunta el año en que nacieron

let anioNacieron = Number(prompt('Ingrese el año que nacieron'));
const anioActual = 2021;
let edad = anioActual - anioNacieron;
document.write(`La edad de la persona es: ${edad}<br>`);

//10.Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la 
//edad de la persona de menor edad

let edadPersonaUno = Number(prompt('Ingrese la edad de la primera persona'));
let nombrePersonaUno = String(prompt('Ingrese el nombre de la primera persona'));
let edadPersonaDos = Number(prompt('Ingrese la edad de la segunda persona'));
let nombrePersonaDos = String(prompt('Ingrese el nombre de la segunda persona'));
let edadPersonaTres = Number(prompt('Ingrese la edad de la tercera persona'));
let nombrePersonaTres = String(prompt('Ingrese el nombre de la tercera persona'));

if (edadPersonaUno < edadPersonaDos && edadPersonaUno < edadPersonaTres) {
    document.write(`La edad de la persona menor es: ${edadPersonaUno} y su nombre es: ${nombrePersonaUno}<br>`);
} else if (edadPersonaDos < edadPersonaUno && edadPersonaDos < edadPersonaTres) {
    document.write(`La edad de la persona menor es: ${edadPersonaDos} y su nombre es: ${nombrePersonaDos}<br>`);
} else if (edadPersonatres < edadPersonaUno && edadPersonaDos < edadPersonaTres) {
    document.write(`La edad de la persona menor es: ${edadPersonaTres} y su nombre es: ${nombrePersona}<br>`);
}

// 11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un 
// año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 
// años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo 
// y represéntelo ,que permita determinar el bono que recibirá un trabajador

const bonoUnAnio = 100;
const bonoDosAnio = 200;
const bonoTresAnio = 300;
const bonoCuatroAnio = 400;
const bonoQuintoAnio = 500;
const bonoMasCincoAnio = 1000;
let numeroAnios = Number(prompt('Ingrese el número de años'));

switch (numeroAnios) {
    case 1:
        document.write(`El bono que recibirá es $${bonoUnAnio}<br>`);
        break;
    case 2:
        document.write(`El bono que recibirá es $${bonoDosAnio}<br>`);
        break;
    case 3:
        document.write(`El bono que recibirá es $${bonoTresAnio}<br>`);
        break;
    case 4:
        document.write(`El bono que recibirá es $${bonoCuatroAnio}<br>`);
        break;
    case 5:
        document.write(`El bono que recibirá es $${bonoQuintoAnio}<br>`);
        break;
    case 5:
        document.write(`El bono que recibirá es $${bonoQuintoAnio}<br>`);
        break;
    default:
        document.write(`El bono que recibirá es $${bonoMasCincoAnio}<br>`);
        break;
}

// 12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual 
// durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido 
// en cada uno de los 6 años? Realice el algoritmo y representan la solución, 
// utilizando el ciclo apropiado

const salarioMensual = 1500;
const salarioAnual = salarioMensual * 12;
const incremento = 10 / 100;
const incrementoAnual = salarioAnual * incremento;
let salarioAnualMasIncrementoAnual = salarioAnual + incrementoAnual;
let saliarioSeisAnios = salarioAnualMasIncrementoAnual * 6;
document.write(`Salario mensual es ${salarioMensual}<br>`);
document.write(`Salario anual es ${salarioAnual}<br>`);
document.write(`El incremento anual es ${incremento}<br>`);
document.write(`El salario anual + el incremento anual es ${salarioAnualMasIncrementoAnual}<br>`);
document.write(`El salario anual + el incremento anual dentro de los 6 anios es ${saliarioSeisAnios}<br>`);


// 13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el 
// número de aprobados y reprobados

let numeroAlumnos = Number(prompt('Ingrese el número de alumnos'));
let determine;
let aprobado = 0;
let desaprobado = 0;
for (let step = 0; step < numeroAlumnos; step++) {
    // Se ejecuta 5 veces, con valores del paso 0 al 4.
    determine = String(prompt('Aprobado o desaprobado?'));
    if (determine == 'aprobado') {
        aprobado += 1;
    } else if (determine == 'desaprobado') {
        desaprobado += 1;
    }
}
document.write(`El número de aprobados es ${aprobado}<br>`);
document.write(`El número de desaprobados es ${desaprobado}<br>`);


// 14. Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea 
// contabilizar, de un lote de N focos, el número de focos de cada color que hay en 
// existencia

let numeroFocos = Number(prompt('Ingrese el número de focos'));
let colorFoco;
let verde = 0;
let blanco = 0;
let rojo = 0;
let otros = 0;
for (let i = 0; i < numeroFocos; i++) {
    colorFoco = String(prompt('Ingrese el color de focos'));
    switch (colorFoco) {
        case 'verde':
            verde += 1;
            break;
        case 'blanco':
            blanco += 1;
            break;
        case 'rojo':
            rojo += 1;
            break;
        default:
            otros += 1;
    }
}
document.write(`El número de focos de color verde es ${verde}<br>`);
document.write(`El número de focos de color blanco es ${blanco}<br>`);
document.write(`El número de focos de color rojo es ${rojo}<br>`);
document.write(`El número de focos de color otros es ${otros}<br>`);

// 15. Realice un algoritmo para determinar si una persona puede votar con base en 
// su edad en las próximas elecciones
/*
-------------------------------------------------------------
Las varibles se están tomando de la pregunta 9
-------------------------------------------------------------
let anioNacieron = Number(prompt('Ingrese el año que nacieron'));
const anioActual= 2021;
let edad = anioActual - anioNacieron;
*/
const mayorEdad = 18;
if (edad >= mayorEdad) {
    document.write(`La persona tiene ${edad}, la cual puede votar en estas elecciones`);
} else {
    document.write(`La persona tiene ${edad}, la cual NO puede votar en estas elecciones por ser menor de edad`);
}
