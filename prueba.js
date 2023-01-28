function calcular_prestamo ( monto , cuotas){

    monto = parseFloat (monto);
    cuotas = parseInt (cuotas);

    let prestamo = 0;

    if (monto > 0 && cuotas == 3){
        prestamo = monto + (monto *0.15);
        return prestamo
    }
    else if (monto > 0 && cuotas == 6){
        prestamo = monto + (monto *0.30);
        return prestamo
    }
    if (monto > 0 && cuotas == 12){
        prestamo = monto + (monto *0.65);
        return prestamo
    }
}

function es_socio (prestamo , estado_usuario){

    if ( estado_usuario == "SI"){
        let descuento = prestamo - (prestamos *0.20);
        return descuento
    }
    else {
        return 0
    }
}









console.log("Bienvenido al sistea");

let monto = "";

while (monto != "FIN"){
    monto = prompt ("Ingrese monto");

    if (monto != "FIN"){
        let estado_usuario = prompt ("Es socio: SI o NO");
        let cuotas = prompt ("Ingrese cuotas 3, 6 o 12");

        let resultado_prestamo = (calcular_prestamo (monto , cuotas)) / cuotas;
        resultado_prestamo = parseInt (resultado_prestamo)
        let resultado_descuento = es_socio (resultado_prestamo , estado_usuario);

        console.log ("Pediste: " , monto);
        console.log ("Cuotas: " , cuotas);
        console.log ("Devolves: " , resultado_prestamo);

    if (resultado_descuento != 0){
        console.log(" Con el descuento", resultado_descuento)
    }

    }
    

}