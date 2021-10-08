function calculo() {
    alert("Danny Larrea es genial");
    let totalCuenta = document.getElementById('total').value;
    let servicio = document.getElementById('servicio').value;
    let personas = document.getElementById('personas').value;

    /* Las clases y los nombre requieren un numero porque no son unicas, asi como los ID si lo son
    let servicio = document.getElementsByName('servicio')[0].value;
    let personas = document.getElementsByClassName('personas')[0].value; */
    alert(personas + " " + servicio + " " + totalCuenta)

}