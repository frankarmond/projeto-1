function quandoClicar() {
    var listaNumeros = [
        10,
        5,
        10,
        5,
        10,
        5,
    ]
    
    var resultado = 0
    
    for (var n = 0; n < listaNumeros.length; n++) {
        resultado = resultado + listaNumeros[n]
    
        console.log(resultado)
    }
    
    console.log('A média é', resultado/listaNumeros.length )
}

quandoClicar()