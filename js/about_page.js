//import { aboutGreetingContent } from '/js/about_contents/about_greeting.js';
//import { aboutSkillsContent } from '/js/about_contents/about_skills.js';

class ItemMenuAbaut {
    constructor(itemData, indexNumber) {
        this.name = itemData.name;
        this.icon = itemData.iconClass;
        this.indexNumber = indexNumber;
    }
    insert(insertSection) {
        let newElem = document.createElement('div');
        newElem.classList.add('about-menu__item', `about-menu__item_${this.indexNumber}`);
        newElem.setAttribute('data-content-block', this.name);
        newElem.innerHTML = 
            `<span class="about-menu__item_icon ${this.icon}"></span>
            <span class="button-shell button-shell_1"></span>
            <span class="button-shell button-shell_2"></span>
            <span class="button-shell button-shell_3"></span>`;
        insertSection.insertAdjacentElement("beforeend", newElem);
    }
}

class ContentContainerAbaut {
    constructor(containerData, indexNumber) {
        this.name = containerData.name;
        this.indexNumber = indexNumber;
    }
    insert(insertSection) {
        let newElem = document.createElement('div');
        newElem.classList.add('about-content__conteiner');
        newElem.setAttribute('id', this.name);
        //newElem.innerHTML = `about-content__conteiner_${this.indexNumber}`;
        insertSection.insertAdjacentElement("beforeend", newElem);
    }
}

//
//const sourceAbout = '../about_blocks.json';

const sourceAbout = [
    {
        name: "about-greeting",
        iconClass: "icon-about-me"
    },
    {
        name: "about-skills",
        iconClass: "icon-about-me"
    },
    {
        name: "my-story",
        iconClass: "icon-about-me"
    }
];

const popupAbout = document.querySelector('.popup_about');
if (popupAbout) {
    const popupAboutContent = popupAbout.querySelector('.popup__content');
    popupAboutContent.innerHTML = 
        `<div class="about">
            <div class="about-content">
                
            </div>
            <div class="about-menu">
                <div class="about-menu__axix"></div>
                <div class="about-menu__conteiner">
    
                </div>
                <div class="about-menu__control-buttons">
                    <button class="about-menu__control-buttons_close-button"><span></span></button>
                    <button class="about-menu__control-buttons_clockwise"><span></span></button>
                    <button class="about-menu__control-buttons_counter-clockwise"><span></span></button>
                </div>
            </div>
        </div>`;

    const menuSection = popupAboutContent.querySelector('.about-menu__conteiner');
    const contentSection = popupAboutContent.querySelector('.about-content');
    getAndCreateAboutBlocks(sourceAbout, menuSection, contentSection).then(function() {
        aboutMenuSwitchContent();
        closeAboutMenu();
        addContentBlocks();
    });      
}

//
async function getAndCreateAboutBlocks(arr, insertSectionMenu, insertSectionContent) {
    if (arr.length) {
        for (let i = 0; i < arr.length; i++) {
            let menuItem = new ItemMenuAbaut(arr[i], i);
            menuItem.insert(insertSectionMenu);

            let contentContainer = new ContentContainerAbaut(arr[i], i);
            contentContainer.insert(insertSectionContent);
        }    
    } else {

    }
}

//
/*
async function getAndCreateAboutBlocks(source, insertSectionMenu, insertSectionContent) {

    let response = await fetch(source, {
        method: 'GET'
    });
    
    if(response.ok) {
        const result = await response.json();
        if (result.length) {
            for (let i = 0; i < result.length; i++) {
                let menuItem = new ItemMenuAbaut(result[i], i);
                menuItem.insert(insertSectionMenu);

                let contentContainer = new ContentContainerAbaut(result[i], i);
                contentContainer.insert(insertSectionContent);
            }   
        } else {

        }
    } else {

    }
}
*/

function aboutMenuSwitchContent() {
    const menuConteiner = document.querySelector('.about-menu__conteiner');
    const itemsMenu = document.querySelectorAll('.about-menu__item');
    const buttonsClockwise = document.querySelector('.about-menu__control-buttons_clockwise');
    const buttonsCounterClockwise = document.querySelector('.about-menu__control-buttons_counter-clockwise');
    const contentConteiners = document.querySelectorAll('.about-content__conteiner');

    const arc = 2 * Math.PI / itemsMenu.length;
    const radius = 50;

    for (let i = 0; i < itemsMenu.length; i++) {
        const angle = i * arc;
        const x = radius * -Math.cos(angle);
        const y = radius * -Math.sin(angle);
        itemsMenu[i].style.left = 50 + x + '%';
        itemsMenu[i].style.top = 50 + y + '%';    
    }

    let rotationAngle = 0; 
    let nth = 0;
    buttonsClockwise.addEventListener('click', function(event) {
        rotationAngle = rotationAngle + 180/itemsMenu.length*2;
        menuConteiner.style.transform = `rotate(${rotationAngle}deg)`;
        for (let i = 0; i < itemsMenu.length; i++) {
            itemsMenu[i].style.transform = `translate(-50%, -50%) rotate(${-rotationAngle}deg)`;
        }

        (nth == 0) ? nth = itemsMenu.length - 1 : nth--;
        contentActive();
    });

    buttonsCounterClockwise.addEventListener('click', function(event) {
        rotationAngle = rotationAngle - 180/itemsMenu.length*2;
        menuConteiner.style.transform = `rotate(${rotationAngle}deg)`;
        for (let i = 0; i < itemsMenu.length; i++) {
            itemsMenu[i].style.transform = `translate(-50%, -50%) rotate(${-rotationAngle}deg)`;
        }

        (nth == itemsMenu.length - 1) ? nth = 0 : nth++;
        contentActive();
    });

    function contentActive() {
        for (let contentConteiner of contentConteiners) {
            contentConteiner.classList.remove('_active');
        }
        for (let itemMenu of itemsMenu) {
            if (itemMenu.classList.contains(`about-menu__item_${nth}`)) {
                let contentID = itemMenu.getAttribute('data-content-block');
                document.getElementById(contentID).classList.add('_active');
            }
        }
    }
    
    contentActive();
}

function closeAboutMenu() {
    const menu = document.querySelector('.about-menu');
    const closeMenuButton = document.querySelector('.about-menu__control-buttons_close-button');
    closeMenuButton.addEventListener("click", () => {menu.classList.toggle('_close')});
}

function addContentBlocks() {
    aboutGreetingContent();
    aboutSkillsContent();
}

function aboutGreetingContent() {
    const contentBlockConteiner = document.getElementById('about-greeting');
    const template = 
        `<div class="about-greeting">
            <div class="about-greeting__content">
                <div class="about-greeting__greeting">
                    <p>
                        Hi! I am a front-end developer based in Nikolaev, Ukraine.
                    </p>
                </div>
                <div class="about-greeting__about-me">
                    <p>
                        Since the beginning of 2021, I've enjoyed ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>`;

    if (contentBlockConteiner) {
        contentBlockConteiner.innerHTML = template;
    }
}

function aboutSkillsContent() {
    class SkillLevel {
        constructor(name, level, color) {
            this.name = name;
            this.level = level;
            this.color = color;
            this.angleRotationFirst;
            this.angleRotationSecond;
        }
        get angleRotationFirst() {
            if(this.level >= 50) {
                return 180;
            } else {
                return 180/50*this.level;
            }
        }
        get angleRotationSecond() {
            if(this.level > 50) {
                return 180/50*(this.level-50);
            } else {
                return 0;
            }
        }
        insert(insertSection) {
            let displayEndLine;
            if(this.level > 50) {
                displayEndLine = "block";
            } else {
                displayEndLine = "none";
            }
            let newElem = document.createElement('div');
            newElem.classList.add('skill');
            newElem.innerHTML = 
            `<div class="skill__diagram diagram">
                <div class="diagram__conteiner" style="box-shadow: 0px 0px 20px 3px ${this.color};">
                    <div class="diagram__start-line" style="transform:rotate(${this.angleRotationFirst}deg); background: linear-gradient(to right, ${this.color} 50%, transparent 50%); z-index: 1">
                    </div>
                    <div class="diagram__end-line" style="transform:rotate(${this.angleRotationSecond}deg); background: linear-gradient(to right, transparent 50%, ${this.color} 50%); display: ${displayEndLine}; z-index: 3">
                    </div>
                    <div class="diagram__shield" style="z-index: 2">
                    </div>
                    <div class="diagram__value" style="z-index: 4">
                        <span style="text-shadow: 0px 0px 3px ${this.color};">${this.level}%</span>
                    </div>
                </div>
            </div>
            <div class="skill__name">
                <span style="text-shadow: 5px 0px 3px ${this.color};">${this.name}</span>
            </div>
            `;
            insertSection.insertAdjacentElement("beforeend", newElem);
        }
    }

    const contentBlockConteiner = document.getElementById('about-skills');

    const skills = [
        {
            name: "HTML",
            level: 85,
            color: '#E75710'
        },
        {
            name: "CSS",
            level: 80,
            color: '#4169E1'
        },
        {
            name: "JavaScript",
            level: 60,
            color: '#EFD81D'
        },
        {
            name: "ReactJS",
            level: 10,
            color: '#5CCFEE'
        },
        {
            name: "NodeJS",
            level: 5,
            color: '#7CC327'
        }
    ];

    if (contentBlockConteiner) {
        let template = document.createElement('div');
        template.classList.add('skills-gallery');
        getAndCreateSkillsDiagrams(skills, template);

        contentBlockConteiner.prepend(template);;
    }

    function getAndCreateSkillsDiagrams(arr, insertSection) {
        if (arr.length) {
            for (let i = 0; i < arr.length; i++) {
                let item = new SkillLevel(arr[i].name, arr[i].level, arr[i].color);
                item.insert(insertSection);
            }    
        } else {
    
        }
    }
}

