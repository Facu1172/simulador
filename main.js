function mensajefinal (acumulador,cantidadnotas){
    alert("El promedio de " + nombrealumno + " es " + acumulador/cantidadnotas)
}

    
alert("Este simulador permite calcular el promedio de las notas ingresadas de un alumno")

let nombrealumno = prompt("ingrese el nombre del alumno")
let cantidadnotas=parseInt(prompt("ingrese la cantidad de notas a ingresar"))
let acumulador = 0
let x = 1
while (x <= cantidadnotas){
    let notasuma = parseInt(prompt("ingrese las notas de una en una"))
acumulador = notasuma + acumulador
x = x + 1}

mensajefinal(acumulador,cantidadnotas)