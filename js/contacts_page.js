const contactsData = [
    {
        name: 'telegram',
        link: 'https://t.me/GorbanSergey',
        icon: 'icon-telegram',
        colorRGB: '40, 159, 217'
    },
    {
        name: 'viber',
        link: 'viber://chat?number=%2B380938206714',
        icon: 'icon-viber',
        colorRGB: '115, 96, 242'
    },
    {
        name: 'instagram',
        link: 'https://www.instagram.com/accounts/login/?next=/gorban.sergey.95/',
        icon: 'icon-instagram',
        colorRGB: '233, 53, 69'
    },
    {
        name: 'github',
        link: 'https://github.com/SerGorban',
        icon: 'icon-github',
        colorRGB: '129, 0, 222'
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/sergey-gorban-95975822b/',
        icon: 'icon-linkedin',
        colorRGB: '16, 138, 201'
    }
];

class Contact {
    constructor(name, link, icon, color = "#fff", rotateCoefficient = 3, dataPerspective = "0,0,50") {
        this.name = name;
        this.link = link;
        this.icon = icon;
        this.color = color;
        this.rotateCoefficient = rotateCoefficient;
        this.dataPerspective = dataPerspective;
    }
    insert(insertSection) {
        let newElem = document.createElement('div');
        newElem.classList.add('contacts-gallery__conteiner');
        newElem.innerHTML = 
        `<div class="contacts-gallery__item card-rotate" data-rotate-coefficient="${this.rotateCoefficient}" data-color="${this.color}" data-name="${this.name}">
            <a href="${this.link}" target="_blank" class="contacts-gallery__link" data-perspective-element-coords="${this.dataPerspective}">
                <span class="contacts-gallery__icon ${this.icon}"></span>
            </a>
        </div>`;
        insertSection.insertAdjacentElement("beforeend", newElem);
    }
}

const contactsBlock = document.getElementById('contacts').querySelector('.popup__content');
contactsBlock.innerHTML = `
    <div class="contacts-gallery">
        <span class="contacts-gallery__name"></span>
        <div class="contacts-gallery__wrapper card-rotate-gallery">
        </div>
    </div>`;
const contactsGallery = contactsBlock.querySelector('.contacts-gallery__wrapper');

function createContactsItems(arr, insertSection) {
    //loader
    insertSection.innerHTML = 
    `<div class="loader system-message">
        <div class="loader__circle"></div>
        <div class="loader__text">loading...</div>
    </div>`;
    //
    if (arr.length) {
        insertSection.innerHTML = ``;
        for (let contact of arr) {
            contact = new Contact(contact.name, contact.link, contact.icon, contact.colorRGB);
            contact.insert(insertSection);
        }
    } else {
        insertSection.innerHTML = 
        `<div class="system-message">
            Unfortunately, there are not contacts yet...
        </div>`;
    }
}
createContactsItems(contactsData, contactsGallery);

const contactItems = contactsGallery.querySelectorAll(".contacts-gallery__item");
const nameBlock = contactsBlock.querySelector('.contacts-gallery__name');
const contactPageBody = contactsBlock.closest('.popup__body');
for (contactItem of contactItems) {
    contactItem.addEventListener('mouseenter', function() {
        const color = this.getAttribute('data-color');
        const name = this.getAttribute('data-name');
        this.style.boxShadow = `0px 0px 20px 3px rgb(${color})`;
        this.querySelector('.contacts-gallery__icon').style.textShadow = `0px 0px 8px rgb(${color})`;
        nameBlock.textContent = name;
        contactPageBody.style.backgroundColor = `rgba(${color}, 0.15)`;
    });
    contactItem.addEventListener('mouseleave', function() {
        this.style.boxShadow = `none`;
        this.querySelector('.contacts-gallery__icon').style.textShadow = `none`;
        nameBlock.textContent = '';
        contactPageBody.style.backgroundColor = '';
    });
}
