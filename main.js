//EMPLEO DE FUNCTION, ARROJA EL MENSAJE FINAL DEL ARRAY Y EL PROMEDIO, INDICA SI SE APROBO O SI DEBE RECURSAR
function mensajefinal1 (acumulador,cantidadnotas){
alert("El promedio de " + array.shift() + " es " + promedio + ", el alumno promociona al " + (array.pop() + 1) +" año")
}
function mensajefinal2 (acumulador,cantidadnotas){
    alert("El promedio de " + array.shift() + " es " + promedio + ", el alumno debe recursar " + (array.pop()) +" año")
    }

//INICIO DEL PROGRAMA, MENSAJE DE BIENVENIDA    
alert("Este simulador permite calcular el promedio de las notas ingresadas de un alumno")

//ARRAY, TOMA DEL NOMBRE DEL ALUMNO Y EL AÑO
let array = []
array.push(prompt("ingrese el nombre del alumno"))
array.push(parseInt(prompt("ingrese el año del alumno")))
//VARIABLES PARA DECLARAR LA CANTIDAD DE NOTAS Y EL ACUMULADOR QUE HARA EL CICLO
let cantidadnotas=parseInt(prompt("ingrese la cantidad de notas a ingresar"))
let acumulador = 0
let x = 1
while (x <= cantidadnotas){
    let notasuma = parseInt(prompt("ingrese las notas de una en una"))
acumulador = notasuma + acumulador
x = x + 1}
let promedio = acumulador/cantidadnotas

//MENSAJE FINAL SACADO DE LA PRIMER FUNCTION, SI ES MAYOR A 7 APRUEBA SI ES MENOR DEBE RECURSAR
if(promedio >= 7){
mensajefinal1(acumulador,cantidadnotas)
}
else 
mensajefinal2(acumulador,cantidadnotas)
