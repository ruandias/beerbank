const inputSearch = document.getElementById('inputSearch')

const container = document.getElementById('container')
container.setAttribute('class', 'container wrap')

async function getBeers() 
{
  let response = await fetch(`https://api.punkapi.com/v2/beers`)
  let data = await response.json()
  
  data.forEach(function({ image_url, name, tagline }) {

    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const img = document.createElement('img')
    img.src = image_url

    const cardText = document.createElement('div')
    cardText.setAttribute('class', 'cardText')

    const h1 = document.createElement('h1')
    h1.textContent = name

    const p = document.createElement('p')
    p.textContent = tagline

    
    container.appendChild(card)
    card.appendChild(img)
    card.appendChild(cardText)
    cardText.appendChild(h1)
    cardText.appendChild(p)
  })
}

getBeers()



