'use strict'

import produtos from './produtos_atualizados.json' with { type: 'json' }

const teamContainer = document.getElementById('team')

produtos.forEach(produto => {
    const card = document.createElement('div')
    card.classList.add('card')


    const id = document.createElement('p')
    id.textContent = produto.id

    const nome = document.createElement('h3')
    nome.textContent = produto.nome
   
    const img = document.createElement('img')
    img.src = `./img/${produto.imagem}`

    const descricao = document.createElement('p')
    descricao.textContent = produto.descricao 

    const preco = document.createElement('h3')
    preco.textContent = produto.preco   

    const categoria = document.createElement('p')
    categoria.textContent = produto.categoria 

    const classificacao = document.createElement('p')
    classificacao.textContent = produto.classificacao

    card.append(id, nome, img, descricao, preco, categoria, classificacao)
    teamContainer.appendChild(card)




})