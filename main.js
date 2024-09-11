function Coletar(){

  let cidade = document.getElementById('cep')
  Dados(cidade.value)

}

async function Dados(cep){

    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    ExibirDados(dados)

}

function ExibirDados(dados){
   
    document.getElementById('cidade').value = dados.localidade
    document.getElementById('bairro').value = dados.bairro
    document.getElementById('endereco').value = dados.logradouro

}

//Função enter 

const form = document.querySelector('form')
const submit = document.querySelector('button[type="submit"]')

form.addEventListener('keydown', function(e) {
    if(e.key === 'Enter' && !e.shiftkey) {
        e.preventDefault()
        form.submit()
    }

})