const sourceEducationalProjects = '../educational_projects.json';
const sourceCommercialProjects = '../commercial_projects.json';
const galleryEducationalProjects = document.getElementById('educational-projects').querySelector('.project-card-gallery');;
const galleryCommercialProjects = document.getElementById('commercial-projects').querySelector('.project-card-gallery');;

class Card {
    constructor(cardData) {
        this.cardLink = cardData.cardLink;
        this.dataRotateCoefficient = cardData.dataRotateCoefficient;
        this.imgSRC = cardData.imgSRC;
        this.title = cardData.title; 
        this.category = cardData.category;
        this.creationDate = cardData.creationDate; 
    }
    insert(insertSection) {
        let newElem = document.createElement('div');
        newElem.classList.add('project-card-gallery__conteiner', 'card-conteiner');
        newElem.innerHTML = 
        `<a href="${this.cardLink}" target="_blank" class="project-card-gallery__item card-rotate" data-rotate-coefficient="${this.dataRotateCoefficient}">
            <div class="project-card-gallery__img">
                <img src="${this.imgSRC}">
            </div>
            <div class="project-card-gallery__description">
                <div class="project-card-gallery__title">
                    <span class="project-card-gallery__field-name">Title:</span>
                    <span class="project-card-gallery__field-value">${this.title}</span>
                </div>
                <div class="project-card-gallery__category">
                    <span class="project-card-gallery__field-name">Category:</span>
                    <span class="project-card-gallery__field-value">${this.category}</span>
                </div>
                <div class="project-card-gallery__date">
                    <span class="project-card-gallery__field-name">Сreation date:</span>
                    <span class="project-card-gallery__field-value">${this.creationDate}</span>
                </div>
            </div>
        </a>`;
        insertSection.insertAdjacentElement("beforeend", newElem);
    }
}
async function getCardsData(source, insertSection) {
    let response = await fetch(source, {
        method: 'GET'
    });
    if (response.ok) {
        const result = await response.json();

        for (let card of result) {
            card = new Card(card);
            card.insert(insertSection);
        }
    } else {
        let messageIfNotFound = "There are not works in this category yet...";
    }
}

getCardsData(sourceEducationalProjects, galleryEducationalProjects);
getCardsData(sourceCommercialProjects, galleryCommercialProjects);
