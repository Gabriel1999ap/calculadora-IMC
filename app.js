function calcular() {
  var nome = prompt('Qual é seu nome?')
  var peso = Number(prompt('Qual é seu peso?'))
  var altura = Number(prompt('Qual é sua altura'))

  var imc = peso / (altura * altura)
  var dadosPessoais = `${nome} seu IMC é de ${imc.toFixed(1)}`

  document.getElementById('cadastro').innerHTML = dadosPessoais

  if (imc <= 18.5) {
    document.getElementById('veredito').innerHTML =
      'Seu grau é: Abaixo do Peso.'
  } else if (imc > 18.5 && imc <= 24.9) {
    document.getElementById('veredito').innerHTML = 'Seu grau é: Peso Normal.'
  } else if (imc > 24.9 && imc <= 29.9) {
    document.getElementById('veredito').innerHTML = 'Seu grau é: Sobrepeso.'
  } else if (imc > 29.9 && imc <= 34.9) {
    document.getElementById('veredito').innerHTML =
      'Seu grau é: Obesidade Grau I.'
  } else if (imc > 34.9 && imc <= 39.9) {
    document.getElementById('veredito').innerHTML =
      'Seu grau é: Obesidade Grau II.'
  } else {
    document.getElementById('veredito').innerHTML =
      'Seu grau é: Obesidade Grau III.'
  }
}
