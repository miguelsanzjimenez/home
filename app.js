const bookInfo = [
{
    id: 1,
    link: 'https://www.trinivergaraediciones.com/Thriller+++Novela+Negra/Crimen+y+misterio++Novela+negra/Maldito+asfalto/2203ES',
    img: 'maldito-asfalto.png',
    h3: 'Maldito asfalto',
    h4: 'S.A. Cosby'
},

{
    id: 2,
    link: 'https://www.guillermoescolareditor.com/libro/john-barleycorn_124280/',
    img: 'memorias.jpeg',
    h3: 'John Barleycorn: Memorias de un alcohólico',
    h4: 'Jack London'
},

{
    id: 3,
    link: 'https://www.guillermoescolareditor.com/libro/john-barleycorn_124280/',
    img: 'democracy.jpeg',
    h3: 'Democracy Now!',
    h4: 'Amy Goodman'
},

{
    id: 4,
    link: 'https://www.guillermoescolareditor.com/libro/john-barleycorn_124280/',
    img: 'no-mires.jpeg',
    h3: 'No mires ahora y otros relatos',
    h4: 'Daphne DuMaurier'
},

{
    id: 5,
    link: 'https://www.guillermoescolareditor.com/libro/john-barleycorn_124280/',
    img: 'pajaro-carpintero.jpeg',
    h3: 'El pájaro carpintero',
    h4: 'James McBride'
}
]

const bookLink = document.querySelector('#bookLink');
const bookCover = document.querySelector('#bookCover');
const newTitle = document.querySelector('#newTitle');
const newAuthor = document.querySelector('#newAuthor');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

/** set starting item */
let currentItem = 0;

/** window load */
window.addEventListener('DOMContentLoaded', function(){
    changeInfo(currentItem)

})

/**next button logic */
nextBtn.addEventListener('click', function(){
currentItem++;
if(currentItem > bookInfo.length -1){
    currentItem = 0;
}
changeInfo(currentItem);
})

/**prev button logic */
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = bookInfo.length -1;
    }
    changeInfo(currentItem);
    })

/** change info based on item */
function changeInfo(currentItem) {
    const item = bookInfo[currentItem];
    bookLink.href = item.link;
    bookCover.src = item.img;
    newTitle.innerText = item.h3;
    newAuthor.innerText = item.h4;
}