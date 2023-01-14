let musicas = [
    {titulo: 'Portals', artista: 'SHEETSSYNTHESIA', src: './assets/MUSIC/Avengers Endgame - Portals (Piano)  SHEETSSYNTHESIA.mp3', img: './assets/img/portais.jpg'},
    {titulo: 'Interstellar', artista: 'Hans Zimmer', src: './assets/MUSIC/Hans Zimmer - Interstellar - Main Theme (Piano Version)  Sheet Music.mp3', img: './assets/img/interstellar.jpg'},
    {titulo: 'Inception', artista: 'Hans Zimmer', src: './assets/MUSIC/Inception - Time (Piano Version) [Remake].mp3', img: './assets/img/miguel-dominguez-5yDL5rOKrUM-unsplash.jpg'},
    {titulo: 'Avengers Endgame', artista: 'Movie Hype', src: './assets/MUSIC/The Avengers - Main Theme (Piano Version).mp3', img: './assets/img/avengers.jpg'},
    {titulo: 'Arrival To Earth', artista: 'Brandon K. Verrett', src: './assets/MUSIC/Transformers - Arrival To Earth (Piano Version).mp3', img: './assets/img/transformes.jpg'},
    {titulo: 'Heathens', artista: 'Pianella Piano', src: './assets/MUSIC/twenty one pilots - Heathens (Suicide Squad Soundtrack)  Piano Cover by Pianella Piano.mp3', img: './assets/img/onepilots.jpg'},
    {titulo: 'Two Steps From Hell', artista: 'Victory', src: './assets/MUSIC/Two Steps From Hell - Victory (Piano Version).mp3', img: './assets/img/miguel-dominguez-5yDL5rOKrUM-unsplash.jpg'},
]



let musica = document.querySelector('audio');

let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao > h2');
let nomeArtista = document.querySelector('.descricao > i')

renderizarMusica(indexMusica);

//Eventos
document.querySelector('#botao-play').addEventListener('click', tocarMusica);
document.querySelector('#botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
    
});

document.querySelector('.posterior').addEventListener('click', () =>{
    indexMusica++;
    if(indexMusica > 2){
        indexMusica =0;
    }
    renderizarMusica(indexMusica);
    
});

//Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('#botao-pause').style.display = 'block';
    document.querySelector('#botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('#botao-pause').style.display = 'none';
    document.querySelector('#botao-play').style.display = 'block';
}

function atualizarBarra(){
   let barra = document.querySelector('progress');
   barra.style.width = `${Math.floor((musica.currentTime / musica.duration) * 100)}%`;
   let tempoDecorrido = document.querySelector('.inicio');
   tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = `0${campoSegundos}`
    }
    return `${campoMinutos}:${campoSegundos}`
}
