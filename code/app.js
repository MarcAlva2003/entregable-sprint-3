const contenedor = document.getElementById('valores')

function imprimirValores(dolar){
    let nombreDolar = document.createElement('p');
    let valorDolar = document.createElement('p');
    nombreDolar.innerHTML = dolar.nombre
    valorDolar.innerHTML = dolar.venta
    contenedor.appendChild(nombreDolar)
    contenedor.appendChild(valorDolar)
}


function funcionPiola(){
    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        .then(res => res.json())
        .then(res => {for(dolar of res){
            imprimirValores(dolar.casa)
            }}
        )

}
funcionPiola()
