// console.log('hello')
// Array carosello contenente le immagini
const arrayCarousel = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp" 
]

const galleryDomElement = document.querySelector('.gallery');
console.log(galleryDomElement);

console.log(arrayCarousel)

for (let i = 0; i < arrayCarousel.length; i++) {

    // console.log(i);

    const currentSrc = arrayCarousel[i];
    console.log(currentSrc);
    
    const htmlString = `
    <div class="image">
        <img src="${currentSrc}">
    </div>
    `

    console.log(htmlString);
    galleryDomElement.innerHTML += htmlString;
}

const imageDomElements = document.getElementsByClassName('image')

// const secondImageDomeElements = imageDomElements[1]

for (let i = 0; i < imageDomElements.length; i++) {

    // console.log(i)

    const currentAct = imageDomElements[i]
    console.log(currentAct)

    currentAct.classList.add('active')
    console.log(currentAct)

    


}

// const btnUpDocElement = document.querySelector('.btn-up');
// btnUpDocElement.addEventListener ('click', function ( ) {

// })