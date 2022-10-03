//Prática de explicación en clase 
//Manera número 1 de inicializar
let num1;
num1= prompt("Introduzca su número: ");
num1= parseInt(num1);

//Manera número 2 de inicializar
let num2= parseInt(prompt("Introduzca su segundo número: "));
//Se pone parentesis porque es un comando. Otro comando es prompt(); 
document.write("El primer número es: "+num1+"<br>"+"El segundo número es: "+num2);

let suma= num1 + num2;
document.write("<br>"+"La suma de los dos es: "+suma+"<hr>");

//Práctica de 02 modulo Back End 
var nota1, nota2, nota3; 
nota1= prompt ("Ingrese la nota 1: ");
nota2= prompt ("Ingresa la nota 2: ");
nota3= prompt("Ingrese la nota 3 ");
var promedio= (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
document.write("<br>"+"El promedio de las tres notas es: ");
document.write(promedio);

//Problema de ejemplo 3 página 69 
var fra= (9/5)
var cel= parseInt(prompt("Introduzca los celsius: "));
var F= ((fra)*cel)+32;
document.write("<br>"+ "El resultado de la fracción es"+fra);
