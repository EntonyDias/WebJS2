    var valorDesconto = 20;
    var preco = 400;

    console.log(preco);
    console.log(valorDesconto);

    function aplicaDesconto (valorDesconto, preco) {
    let desconto = preco * (valorDesconto / 100)
    let precoFinal = preco - desconto
    return precoFinal;
    }

    console.log(aplicaDesconto(valorDesconto, preco));  