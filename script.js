function getVideos() {
    const desastreMental = document.querySelector("#desastre-mental")
    const amanteProfissional = document.querySelector("#amante-profissional")
    const ervaVenenosa = document.querySelector("#erva-venenosa")
    return [desastreMental, amanteProfissional, ervaVenenosa];
}
const videos = getVideos();

function createCarrousel(maxNumber) {
    const carrousellController = {}
    let currentVideo = 1;
    const getCurrentVideo = () => currentVideo;
    carrousellController.getCurrentVideo = getCurrentVideo;

    function next() {
        if (currentVideo < maxNumber) {
            currentVideo++;
        } else { currentVideo = 1 }
    }
    carrousellController.next = next;

    function previous() {
        if (currentVideo > 1) {
            currentVideo--;
        } else { currentVideo = maxNumber }
    }
    carrousellController.previous = previous;

    return carrousellController;
}
const carrousel = createCarrousel(3);

const nextArrow = document.querySelector("#nextArrow");
const previousArrow = document.querySelector("#previousArrow");

nextArrow.addEventListener('click', () => {
    carrousel.next();
    adjustCarrouselOrder()
})

previousArrow.addEventListener('click', () => {
    carrousel.previous();
    adjustCarrouselOrder()
})

function adjustCarrouselOrder(isPrevious) {
    videos.forEach(video => video.pause())
    const currentVideo = carrousel.getCurrentVideo();

    function changeOrders(order1, order2, order3, oldMain, newMain) {
        videos[0].style.order = order1;
        videos[1].style.order = order2;
        videos[2].style.order = order3;

        videos[newMain].classList.toggle("mainMusicDummy");
        videos[oldMain].classList.toggle("mainMusicDummy");

        videos[oldMain].removeAttribute('controls')
        videos[newMain].setAttribute('controls', '')
    }

    if (!isPrevious) {
        if (currentVideo == 1) {
            changeOrders("1", "2", "3", 0, 1);
        }

        if (currentVideo == 2) {
            changeOrders("3", "1", "2", 1, 2);
        }

        if (currentVideo == 3) {
            changeOrders("2", "3", "1", 2, 0);
        }
    } else {
        if (currentVideo == 1) {
            changeOrders("1", "2", "3", 1, 1);
        }

        if (currentVideo == 2) {
            changeOrders("3", "1", "2", 2, 2);
        }

        if (currentVideo == 3) {
            changeOrders("2", "3", "1", 0, 0);
        }
    }

    changeLyrics(carrousel.getCurrentVideo());
}

const musicas = {
    amanteProfissionalTitulo: "Amante Profissional",
    amanteProfissional: [
        "Alô? Alô, quem é que tá falando? É o amante profissional Como é que você é, hein?",
        "Moreno alto, bonito e sensual Talvez eu seja a solução Do seu problema Carinhoso, bom nível social",
        "Inteligente e à disposição Pra um relacionamento Íntimo e discreto Realize seu sonho sexual",
        "Pra qualquer tipo de transação Sem compromisso emocional, só financeiro E o endereço pra comunicação Pra caixa postal do amante profissional",
        "Amor sem preconceito Sigilo total! Sexo total! Amante profissional",
        "Amor sem preconceito Sigilo total! Sexo total! Amante profissional",
        "Amor sem preconceito Sigilo total! Sexo total! Amante profissional"
    ],

    desastreMentalTitulo: "Desastre Mental",
    desastreMental: [
        "Baby, eu lamento Mas não tenho tempo Pra sentir as tuas dores As minhas eu já não agüento",
        "Minha vista torta Já não se importa Não me conte um bando de mentiras Quando eu for fechar a porta",
        "Aqui ninguém entra Daqui ninguém sai Somos sobreviventes De um desastre mental",
        "Não vou te dizer que eu não ligo De viver assim Sem chance sem romance sem te achar Nao, nao sei nada direito Eu so sei jogar de um jeito Um jeito que aprendi de me salvar Te obrigando a me amar Não vá me convencer que está com medo Que está tarde ou que está cedo",
        "Aqui ninguém entra Daqui ninguém sai Nós somos sobreviventes De um desastre mental",
        "Aqui ninguém entra Daqui ninguém sai Nós somos sobreviventes De um desastre mental",
        "Prefiro te manter Ao lado direito do meu peito Por essa razão Você não navega Você é uma queda de avião No meu coração Não vá se desculpar no fim da festa Por que aqui ninguém tá morto",
        "Aqui ninguém entra Daqui ninguém sai Nós somos sobreviventes De um desastre mental",
        "Aqui ninguém entra Daqui ninguém sai Nós somos sobreviventes De um desastre mental",
        "Aqui ninguém entra Daqui ninguém sai Nós somos sobreviventes De um desastre mental"
    ],

    ervaVenenosaTitulo: "Erva Venenosa",
    ervaVenenosa: [
        "Parece uma rosa (parece uma rosa) De longe é formosa (sim) É toda recalcada (recaldada) Alegria alheia incomoda",
        "Venenosa, eh-eh-eh-eh-eh Erva venenosa, eh-eh, eh É pior do que cobra cascavel Seu veneno é cruel-el-el-el",
        "De longe não é feia (de longe não é feia) Tem voz de uma sereia (sim) Cuidado, não lhe toque (não lhe toque) Ela é má, pode até te dar um choque",
        "Venenosa, eh-eh-eh-eh-eh Erva venenosa, eh-eh, eh É pior do que cobra cascavel Seu veneno é cruel-el-el-el",
        "Se coça como louca, rachada tem a boca Parece uma bruxa, um anjo mau Detesta todo mundo, não para um segundo Fazer maldade é seu ideal",
        "Como um cão danado (como um cão danado) Seu grito é abafado (sim) É vil, é mentirosa (mentirosa) Deus do céu, como ela é maldosa",
        "Venenosa, eh-eh-eh-eh-eh Erva venenosa, eh-eh, eh É pior do que cobra cascavel Seu veneno é cruel-el-el-el",
        "Se coça como louca, rachada tem a boca Parece uma bruxa, um anjo mau Detesta todo mundo, não para um segundo Fazer maldade é seu ideal",
        "Erva venenosa Erva venenosa Erva venenosa",
        "Erva venenosa Erva venenosa Erva venenosa Erva venenosa",
        "Erva venenosa Erva venenosa Erva venenosa Erva venenosa",
        "Erva venesosa Erva..."
    ]

}

const musica = document.querySelector("#musica-letra");

function changeLyrics(number) {

    let lyric = "";
    if (number == 1) { lyric = "amanteProfissional" }
    if (number == 2) { lyric = "ervaVenenosa" }
    if (number == 3) { lyric = "desastreMental" }

    musica.innerHTML = `<h1>${musicas[`${lyric}Titulo`]}</h1>`

    let iteration = 0;
    musicas[lyric].forEach(estrofe => {
        const p = document.createElement("p");
        p.innerHTML = estrofe;
        musica.appendChild(p);
    });

}