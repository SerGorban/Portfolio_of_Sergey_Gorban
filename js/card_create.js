/* // links of data about projects
const sourceEducationalProjects = '../educational_projects.json';
const sourceCommercialProjects = '../commercial_projects.json';
*/
// array of objects(data about projects for github)
const sourceEducationalProjects = [
    {
        cardLink: "../educational_projects/mycompany/index.html",
        dataRotateCoefficient: 10,
        imgSRC: "../img/educational_projects_screens/mycompany.png",
        title: "Mycompany(First work)",
        category: "Landing, Layout",
        creationDate: "11/2021"
    },
    {
        cardLink: "https://sergorban.github.io/Piroll_portfolio/",
        dataRotateCoefficient: 10,
        imgSRC: "../img/educational_projects_screens/Piroll.png",
        title: "Piroll",
        category: "Multipage site, Layout",
        creationDate: "12/2021"
    },
    {
        cardLink: "../educational_projects/matthew_wagerfield_parallax/index.html",
        dataRotateCoefficient: 10,
        imgSRC: "../img/educational_projects_screens/Matthew_wagerfield_parallax.png",
        title: "Matthew wagerfield parallax",
        category: "Parallax-background, Fullscreen",
        creationDate: "01/2022"
    },
    {
        cardLink: "../educational_projects/mountain_parallax/index.html",
        dataRotateCoefficient: 10,
        imgSRC: "../img/educational_projects_screens/Mountain_parallax.png",
        title: "Mountain parallax",
        category: "Parallax-background, Fullscreen",
        creationDate: "01/2022"
    },
    {
        cardLink: "../educational_projects/credit_card_pay/index.html",
        dataRotateCoefficient: 10,
        imgSRC: "../img/educational_projects_screens/Form_credit_card.png",
        title: "Credit card",
        category: "Forms",
        creationDate: "02/2022"
    }
];
const sourceCommercialProjects = [];

const EducationalProjectsBlock = document.getElementById('educational-projects').querySelector('.popup__content');
EducationalProjectsBlock.innerHTML = '<div class="project-card-gallery card-rotate-gallery">';
const CommercialProjectsBlock = document.getElementById('commercial-projects').querySelector('.popup__content');
CommercialProjectsBlock.innerHTML = '<div class="project-card-gallery card-rotate-gallery">';
const galleryEducationalProjects = EducationalProjectsBlock.querySelector('.project-card-gallery');
const galleryCommercialProjects = CommercialProjectsBlock.querySelector('.project-card-gallery');

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

// function to create cards from array without ajax(for github)
function getCardsData(arr, insertSection) {
    //loader
    insertSection.innerHTML = 
    `<div class="loader system-message">
        <div class="loader__circle"></div>
        <div class="loader__text">loading...</div>
    </div>`;
    //
    if (arr.length) {
        insertSection.innerHTML = ``;
        for (let card of arr) {
            card = new Card(card);
            card.insert(insertSection);
        }
    } else {
        insertSection.innerHTML = 
        `<div class="system-message">
            There are not works in this category yet...
        </div>`;
    }
}
/*
// function to receive and create cards from data db with ajax
async function getCardsData(source, insertSection) {
    //loader
    insertSection.innerHTML = 
    `<div class="loader system-message">
        <div class="loader__circle"></div>
        <div class="loader__text">loading...</div>
    </div>`;
    //
    let response = await fetch(source, {
        method: 'GET'
    });

    if (response.ok) {
        const result = await response.json();
        if (result.length) {
            insertSection.innerHTML = ``;
            for (let card of result) {
                card = new Card(card);
                card.insert(insertSection);
            }
        } else {
            insertSection.innerHTML = 
            `<div class="system-message">
                There are not works in this category yet...
            </div>`;
        }
    } else {
        insertSection.innerHTML = 
            `<div class="system-message">
                loading error...
            </div>`;
    }
} */

getCardsData(sourceEducationalProjects, galleryEducationalProjects);
getCardsData(sourceCommercialProjects, galleryCommercialProjects);
