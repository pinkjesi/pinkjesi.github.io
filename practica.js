var x= prompt("Introduce a number between 5 to 10");
try{
    if (x== "") throw "Is empty";
    if(x>10) throw "Too high";
    if(x<5) throw "Too low";
    if (isNaN(x)) throw "It is not a number";
}
catch(err){
    document.write(err);
}
finally { 
    document.write("<br> The programation is finished");
}