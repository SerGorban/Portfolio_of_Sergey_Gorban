const articles = [];

const articlesBlock = document.getElementById('my-articles').querySelector('.popup__content');

class Article {
    constructor() {
    
    }
    insert(insertSection) {
        let newElem = document.createElement('div');
        newElem.classList.add('');
        newElem.innerHTML = ``;
        insertSection.insertAdjacentElement("beforeend", newElem);
    }
}

function getArticles(arr, insertSection) {
    //loader
    insertSection.innerHTML = 
    `<div class="loader system-message">
        <div class="loader__circle"></div>
        <div class="loader__text">loading...</div>
    </div>`;
    //
    if (arr.length) {
        insertSection.innerHTML = ``;
        for (let article of arr) {
            article = new Article(article);
            article.insert(insertSection);
        }
    } else {
        insertSection.innerHTML = 
        `<div class="system-message">
            Sorry. I don't have articles yet...
        </div>`;
    }
}

getArticles(articles, articlesBlock);