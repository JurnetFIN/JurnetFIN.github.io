const tutorData = [
    {
        name: "Otso Oulainen",
        year: "N",
        origin: "Tampereelta",
        favoriteEvent: "Gokous",
        studyTips: "Opiskelu on toissijaista",
        image: "img/gambina-profiili-kuva.png",
        group: "Ryhmä 11- Loistofuksit"
    },
    {
        name: "Skibidi sammakko",
        year: "1",
        origin: "Kosio matkaltaan",
        favoriteEvent: "kurk",
        studyTips: "what the sigma?",
        image: "img/gambina-profiili-kuva.png",
        group: "Ryhmä 11 - Loistofuksit"
    }
];

const hatoData = [
    {
        name: "ALEKGIS",
        year: "ÄLÄ KYSY",
        origin: "Uleaborg",
        favoriteEvent: "ZiTZiT",
        studyTips: "Opiskelu on kolmoissijaista",
        image: "img/gambina-profiili-kuva.png",
        group: "Ryhmä 11 - Loistofuksit"
    }
];

const cardsContainerTutor = document.getElementById('tutor-container');

tutorData.forEach(tutor => {
    document.getElementById('tutor_group_name').textContent = tutor.group;
    const card = document.createElement('div');
    card.className = 'tutor-container';
    card.innerHTML = `
        <div class="card-content">
            <div class="card-title">${tutor.name}</div>
            <div class="card-text">Opiskeluvuosi: ${tutor.year}</div>
            <div class="card-text">Kotoisin: ${tutor.origin}</div>
            <div class="card-text">Lempitapahtuma: ${tutor.favoriteEvent}</div>
            <div class="card-text">Opiskeluvinkit: ${tutor.studyTips}</div>
        </div>
        <img src="${tutor.image}" alt="${tutor.name} - Profiilikuva">
    `;

    cardsContainerTutor.appendChild(card);
});

const cardsContainerHato = document.getElementById('hato-container');

hatoData.forEach(tutor => {
    const card = document.createElement('div');
    card.className = 'hato-container';
    card.innerHTML = `
        <div class="card-content">
            <div class="card-title">${tutor.name}</div>
            <div class="card-text">Opiskeluvuosi: ${tutor.year}</div>
            <div class="card-text">Kotoisin: ${tutor.origin}</div>
            <div class="card-text">Lempitapahtuma: ${tutor.favoriteEvent}</div>
            <div class="card-text">Opiskeluvinkit: ${tutor.studyTips}</div>
        </div>
        <img src="${tutor.image}" alt="${tutor.name} - Profiilikuva">
    `;

    cardsContainerHato.appendChild(card);
});

function toggleSidePanel() {
    const panel = document.getElementById('sidePanel');
    panel.classList.toggle('open');
}
