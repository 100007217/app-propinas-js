function calculo() {

    let totalCuenta = document.getElementById('total').value;
    let servicio = document.getElementById('servicio').value;
    let personas = document.getElementById('personas').value;


    /* Las clases y los nombre requieren un numero porque no son unicas, asi como los ID si lo son
    let servicio = document.getElementsByName('servicio')[0].value;
    let personas = document.getElementsByClassName('personas')[0].value; */
    console.log(personas + " personas " + servicio + " del servicio " + totalCuenta + " total de cuenta");
    let propinaporpersona = totalCuenta * servicio / personas;
    propinaporpersona = propinaporpersona || 0
    if (isFinite(propinaporpersona)) {
        console.log(propinaporpersona);
        document.getElementById('resultado').innerHTML = propinaporpersona + "€ por persona";
        document.getElementById('TotalAPagar').innerHTML = "Total a pagar";
    } else {
        alert("No has introducido numero de personas")
        propinaporpersona = 0
    }
}

function limpiar() {
    document.getElementById("formulario").reset();
}