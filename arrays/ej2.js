const array = ["Agustin Diaz" , "pancho" , "milanesa"]

function procesarPedido(pedidos) {
    const cliente = pedidos.shift();
    const comida= 'guiso'
    pedidos.unshift(comida)
    return pedidos;

}

console.log(procesarPedido(array));