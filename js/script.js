// funcoes auxiliares ou uteis
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

const abrirModal = () => {
    seleciona('.pizzaWindowArea').style.opacity = 0
    seleciona('.pizzaWindowArea').style.display = 'flex'
    setTimeout(() => {
        seleciona('.pizzaWindowArea').style.opacity = 1
    }, 150)
}

const fecharModal = () => {
    seleciona('.pizzaWindowArea').style.opacity = 0
    setTimeout(() => {
        seleciona('.pizzaWindowArea').style.display = 'none'
    }, 500)
}

const botoesFechar = () => {
    /*
    document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', () => {
        //document.querySelector('.pizzaWindowArea').style.display = 'none'
        fecharModal()
    })
    document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click', () => {
        //document.querySelector('.pizzaWindowArea').style.display = 'none'
        fecharModal()
    })
    */
    // BOTOES FECHAR MODAL
    selecionaTodos('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
        item.addEventListener('click', fecharModal)
    })
}

const preencheDadosDasPizzas = (pizzaItem, item) => {
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
}

const preencheDadosModal = (item) => {
    // document.querySelector('.pizzaBig img').src = item.img
    // document.querySelector('.pizzaInfo h1').innerHTML = item.name
    // document.querySelector('.pizzaInfo--desc').innerHTML = item.description
    // document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
    seleciona('.pizzaBig img').src = item.img
    seleciona('.pizzaInfo h1').innerHTML = item.name
    seleciona('.pizzaInfo--desc').innerHTML = item.description
    seleciona('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
}

// MAPEAR pizzaJson para gerar lista de pizzas
pizzaJson.map((item, index ) => {
    //console.log(item)
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)
    //console.log(pizzaItem)
    //document.querySelector('.pizza-area').append(pizzaItem)
    seleciona('.pizza-area').append(pizzaItem)

    // preencher os dados de cada pizza
    preencheDadosDasPizzas(pizzaItem, item)

    // pizza clicada
    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Clicou na pizza')

        // abrir janela modal
        //document.querySelector('.pizzaWindowArea').style.display = 'flex'
        abrirModal()

        // preenchimento dos dados
        preencheDadosModal(item)

    })

    botoesFechar()

}) // fim do MAPEAR pizzaJson para gerar lista de pizzas
