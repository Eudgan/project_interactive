let darkButtom = document.querySelector('.theme-button-dark');
let lightButtom = document.querySelector('.theme-button-light');
let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');

darkButtom.onclick = function() {
    lightButtom.classList.remove('active');
    darkButtom.classList.add('active');
    document.body.classList.add('dark');
}

lightButtom.onclick = function() {
    darkButtom.classList.remove('active');
    lightButtom.classList.add('active');
    document.body.classList.remove('dark');
}

sansSerifButton.onclick = function() {
    serifButton.classList.remove('active');
    sansSerifButton.classList.add('active');
    document.body.classList.remove('serif');
}

serifButton.onclick = function() {
    sansSerifButton.classList.remove('active');
    serifButton.classList.add('active');
    document.body.classList.add('serif');
}

let articles = document.querySelectorAll('.blog-article');

for (let article of articles) {
    let buttonArticle = article.querySelector('.more');
    buttonArticle.onclick = function() {
        article.classList.remove('short');
    }
}

let cardButtonGrid = document.querySelector('.card-view-button-grid');
let cardButtonList = document.querySelector('.card-view-button-list');
let rentCards = document.querySelector('.cards');

cardButtonGrid.onclick = function() {
    cardButtonList.classList.remove('active');
    cardButtonGrid.classList.add('active');
    rentCards.classList.remove('list');
}

cardButtonList.onclick = function() {
    cardButtonGrid.classList.remove('active');
    cardButtonList.classList.add('active');
    rentCards.classList.add('list');
}

let mainPhoto = document.querySelector('.active-photo');
let previewPhotos = document.querySelectorAll('.preview-list a');

for (let photo of previewPhotos) {
    photo.onclick = function(evt) {
        evt.preventDefault();
        let activePhoto = document.querySelector('.preview-list .active-item');
        activePhoto.classList.remove('active-item');
        photo.classList.add('active-item');
        mainPhoto.src = photo.href;
    }
}
