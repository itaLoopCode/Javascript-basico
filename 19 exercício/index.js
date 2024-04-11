// var pagar = prompt ('Seja bem vindo(a),aventureiro(a)! Gostaria de pagar R$ 50,00 para passara noite na nossa hospedagem?"')
// alert("Ótimo! Nós temos as melhores camasde toda a região")
// Que pena! Você parecia seruma pessoa mais legal


var pagar = confirm ('Seja bem vindo(a),aventureiro(a)! Gostaria de pagar R$ 50,00 para passara noite na nossa hospedagem?"')
console.log(pagar)

if( pagar === true){
    console.log("Ótimo! Nós temos as melhores camas de toda a região")
}else if( pagar === false){
    console.log('Que pena! Você parecia ser uma pessoa mais legal!')
}
