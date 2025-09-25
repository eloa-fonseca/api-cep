const txtLogradouro = document.querySelector('#logradouro');
const txtBairro = document.querySelector('#bairro');
const txtComplemento = document.querySelector('#complemento');
const txtLocalidade = document.querySelector('#localidade');
const txtDDD = document.querySelector('#ddd');
const txtEstado = document.querySelector('#estado');

async function buscaCep() { //


    const resultDiv = document.querySelector('#resultDiv');
    let cepBuscado = document.querySelector('#cep').value;


    await fetch(`https://viacep.com.br/ws/${cepBuscado}/json/`)
        .then(response => response.json())
        .then(dados => {

            console.log(dados);

            if (dados['erro']) {
                resultDiv.innerHTML = '<p>CEP não encontrado. Tente novamente.</p>';
            } else {


                //exibido dados nas caixas de texto
                txtLogradouro.value = dados['logradouro'];
                txtBairro.value = dados['bairro'];
                txtComplemento.value = dados['complemento'];
                txtLocalidade.value = dados['localidade'];
                txtDDD.value = dados['ddd'];
                txtEstado.value = dados['estado'];

            }
        })
}

function editarDados() {
    txtLogradouro.disabled = false;
    txtBairro.disabled = false;
    txtComplemento.disabled = false;
    txtLocalidade.disabled = false;S
    txtDDD.disabled = false;
    txtEstado.disabled = false;
}


function mudarCorCaixas(){
    txtLogradouro.style.backgroundColor = '#ecf3bcff';
    txtBairro.style.backgroundColor = '#ecf3bcff';
    txtComplemento.style.backgroundColor = '#ecf3bcff';
    txtLocalidade.style.backgroundColor = '#ecf3bcff';
    txtDDD.style.backgroundColor = '#ecf3bcff';
    txtEstado.style.backgroundColor ='#ecf3bcff';
    // const arrayInputs = document.querySelectorAll('input');

    // for (let index = 1; index < arrayInputs.length; index++) {
    //     array[index].style.backgroundcolor ='#ecfbcff';
        
    // }

    // arrayInputs.forEach(input =>{ 
    //     if(input.id != "cep") {
    //         input.style.backgroundColor='#ecfbcff';
    //     }
    // });
    }