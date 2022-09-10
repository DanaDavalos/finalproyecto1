//Saludo
//alert(`Bienvenido a Contabalance, tu gestion es hoy`)


//Opcion de prueba gratis/estructura condicional
//let pruebaGratis = prompt("Esta interesado en hacer una prueba gratuita? Responder si o no")
//console.log(`La respues ingresada es ${pruebaGratis}`)
//if (pruebaGratis.toLowerCase() == `si`){
//let pruebaGratis = prompt(`Ingrese su Email`)
//    console.log (`El Email ingresado es ${pruebaGratis}`)
//alert(`Pronto uno de nuestros supervisores se comunicara con usted`)
//}
//Metodo de pago si nuestro sistema es contratado HOY
//let cartelDescuento = prompt(`Contratando hoy nuestro sistema de Contabalance el primer mes es gratis. Hasta podes pagar en 3, 6 y hasta 12 cuotas sin interes. Desea contratar nuestros servicios?`)
//console.log(`La respues ingresada es ${cartelDescuento}`)
//if (cartelDescuento.toLowerCase() == `si`){
//}else{
//console.log(`Quiere contratar nuestro servicio? ${cartelDescuento}`)
//}
//Funcion para ingresar cuotas a pagar
//function cuotas3(){
    //let cuotas3 = parseInt(prompt("En cuantas cuotas quiere pagar, elija 3, 6 a 12 cuotas(sin interes)"));
    //alert("Desea pagar en " + cuotas3 + " cuotas de 6 o 12?")
    //return cuotas3
//}

//function cantidad1(){
    //let  = parseInt(prompt("Ingrese la forma de pago de $8999XMES 1)En cuotas 2)Transferencia 3)Mercado Pago. Ingrese un numero. "));
    //console.log(cantidad1)
//}
//function cuotas3(){
    //let cuotas3 = parseInt(prompt("En cuantas cuotas quiere pagar, elija 3, 6 o 12."));
    //alert(`Desea pagar en ${cuotas3}? `)

//}
//let cantidad = console.log(Number(cantidad1()))
//let cuotas = console.log(Number(cuotas3()))


//Carro de compras de pracks.
const paquetesParaElegir = [ 
    {paquete: "Plan Inicio, precio $2864/mes"},
    {paquete: "Plan Contador Independiente, precio $6162/mes"},
    {paquete: "Consultoras y Estudio, precio $10055/mes"},

];
let carritoDePaquetes = []
let seleccion = prompt("Hola! Bienvenido a Contabalance, tu gestion es hoy. Desea realizar la compra de algunos de nuestros paquetes? si o no")
while(seleccion != "si" && seleccion != "no"){
    seleccion = prompt("Ingrese la opcion de si/no si quiere aderirse a algunos de nuestros packs de Contabalance")
    console.log( `La respuesta ingresada es ${seleccion}`)
}

if(paquetesParaElegir == "Plan inicio" || paquetesParaElegir == "Plan Contador Independiente" || paquetesParaElegir == "Consultoras y Estudio" ){
    switch(paquetesParaElegir){
        case "Plan inicio":
        precio = 2863
        break;
        case "Plan Contador Independiente":
        precio = 6162
        break
        case "Consultora y Estudio":
        precio = 10055
        break
    }
    let paquete = parseInt(prompt("Que paquete quiere elegir?"))
    carritoDePaquetes.push({paquetesParaElegir, paquete,precio})
    console.log(paquete)
}else{
    alert(`El paquete a elegir va ser cargado al sistema, pronto nuestros operadores se comunicaran con ustedes`)
}