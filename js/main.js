function caixetaAnime(link, titulo){
fetch(`https://167.114.82.198:3333/${link}`)

.then(response => response.json())

.then(json => {
  console.log(json)
  document.querySelector('.container').innerHTML += `
  <div class="containerH1">
  <h1>${titulo}</h1>
  </div>
  `
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

document.querySelectorAll('.blurAnime').forEach((me) =>{
  me.addEventListener(`click`, () => {
    document.querySelectorAll('.blur').forEach((aa) =>{
      aa.style.display = `none`
  })
} )
})

function caixetaId(id) {
  fetch(`http://167.114.82.198:3333/anime/${id}`)
  .then(response => response.json())
  
  .then(json => {
    console.log(json)
    document.querySelector('.atrasAnime .modalAnime').innerHTML = `
    <h1 class="nomeModal">${json.nome}</h1>
    <div class="containerModal">
    <i id="close" class="fas fa-times"></i>
    <img class="imageModal" src="${json.photo}">
    <ul class="listModal">
      <li>${json.formato}</li>
      <li>${json.genero}</li>
      <li>${json.tipoEp}</li>
      <li><b>Dia de Lançamento:</b> ${json.diaLancamento}</li>
      <li><b>Ano:</b> ${json.ano || 'No specifc'}</li>
    </ul>
    </div>

    <h4>LISTA DE EPISÓDIOS</h4>
    
    `
    
    json.episodes.forEach(function(anime) {
      document.querySelector('.atrasAnime .modalAnime').innerHTML += `
        <div class="modalEps">
        <div
        id="epAnime"
        data-id="${anime.idEpisode}">
        <a href="#">${anime.ep}</a>
        </div>
        </div>
      `
    })

    document.querySelector('#close').addEventListener(`click`, () => {
      document.querySelectorAll('.blur').forEach((aa) =>{
        aa.style.display = `none`
        console.log(aa)
    })
  })
    document.querySelectorAll(`#epAnime`).forEach(function(ep){
      ep.addEventListener(`click`, () => {
        const idEp = ep.getAttribute(`data-id`)
        caixetaVideoId(idEp)
      })
    })
  })
}

function caixetaVideoId(idVideo) {
  fetch(`http://167.114.82.198:3333/video/${idVideo}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    document.querySelector(`.atasVideo`).style.display = `block`
    document.querySelector('.atasVideo .videoAnime').innerHTML = `
    <iframe allowfullscreen
    frameborder="0"
    style="width: 100vw; height: 100vh; position: fixed; top: 0px; left: 0px;"
    src="${json.video}"/>
    `
  })
}
caixetaAnime('', 'Anime mais Visto')
caixetaAnime('launchDay', 'Lançamentos do dia')
caixetaAnime('1/naruto/caixeta', 'Tudo Sobre Naruto')
caixetaAnime('1/dragon Ball/caixeta', 'Tudo Sobre Dragon Ball')





