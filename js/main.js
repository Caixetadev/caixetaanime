function caixetaAnime(link){
fetch(`http://167.114.82.198:3333/${link}`)

.then(response => response.json())

.then(json => {
  console.log(json)
  
  json.animes.forEach(function(anime) {
    document.querySelector('.container').innerHTML += `
    <div 
    id="animeId"
    class="anime" data-id="${anime.idAnime}">
    <img src="${anime.imagemAnime}">
    <span>${anime.nomeAnime}</span>
    </div>
    `
    document.querySelectorAll(`#animeId`).forEach((anime) => {
      anime.addEventListener(`click`, () => {
        const idAnime = anime.getAttribute(`data-id`)
        document.querySelector(`.atrasAnime`).style.display = `block`
        caixetaId(idAnime)
      })
    })
  })

})

}

document.querySelectorAll('.blur').forEach((me) =>{
  me.addEventListener(`click`, () => {
    me.style.display = `none`
  })
})

function caixetaId(id) {
  fetch(`http://167.114.82.198:3333/anime/${id}`)
  .then(response => response.json())
  
  .then(json => {
    console.log(json)
    document.querySelector('.atrasAnime .modalAnime').innerHTML = `
    <h1 class="nomeModal">${json.nome}</h1>
    <div class="containerModal">
    <img class="imageModal" src="${json.photo}">
    <ul class="listModal">
      <li>${json.formato}</li>
      <li>${json.genero}</li>
      <li>${json.tipoEp}</li>
      <li><b>Dia de Lançamento:</b> ${json.diaLancamento}</li>
      <li><b>Ano:</b> ${json.ano}</li>
    </ul>
    </div>

    <h4>LISTA DE EPISÓDIOS</h4>
    
    `
    json.episodes.forEach(function(anime) {
      document.querySelector('.atrasAnime .modalAnime').innerHTML += `
        <div class="modalEps">${anime.ep}</div>
      `
    })
  })
}

function caixetaVideoId(idVideo) {
  fetch(`http://167.114.82.198:3333/video/${idVideo}`)
  .then(response => response.json())
  
  .then(json => {
    console.log(json)
  })
}

caixetaAnime('')



