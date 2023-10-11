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
// console.log(galleryDomElement);

// console.log(arrayCarousel)

for (let i = 0; i < arrayCarousel.length; i++) {

    // console.log(i);

    const currentSrc = arrayCarousel[i];
    // console.log(currentSrc);
    
    const htmlString = `
    <div class="image">
        <img src="${currentSrc}">
    </div>
    `

    // console.log(htmlString);

    galleryDomElement.innerHTML += htmlString;
}

// const imageDomElements = document.getElementsByClassName('image')

// seleziono tutti gli elementi del dom 
const imageSelectDomElement = document.querySelectorAll ('.image');

// attivo la prima immagine con la class active, gli altri elementi hanno display none
let firstCurrent = imageSelectDomElement[0];
firstCurrent.classList.add('active');

// indichiamo la prima immaggine che ha valore 0 nell' array 
let indexCorrent = 0;

// recuperiamo il bottone inferiore dal dom
const btnDownDocElement = document.querySelector('.btn-down');

// diamo la funzione al dom di scroll,ogni click corrisponde ad una foto
btnDownDocElement.addEventListener ('click', function () {
    
    // rimuovo la classe active dall'elemento corrente
    imageSelectDomElement[indexCorrent].classList.remove('active');

    // scalo gli elemnti correnti con il ++ in modo crescente
    indexCorrent++;
    // console.log(indexCorrent)

    // se l'indice corrente se è unguale alla lunghezza, allora prosegue
    if (indexCorrent == imageSelectDomElement.length ) {
        // per poi ritornare al punto di partenza
        indexCorrent = 0;
    } 

    // assegno alla imagine seguente la classe active
    imageSelectDomElement[indexCorrent].classList.add('active');

})

// recupero dal dom il bottone superiore
const btnUpDocElement = document.querySelector('.btn-up');

// diamo delle funzioni al bottone, dovrà cambiare le immagini scorrendo in modo opposto all'altro pulsante
btnUpDocElement.addEventListener ('click', function ( ) {

    // rimuovo la classe active dall'elemento corrente
    imageSelectDomElement[indexCorrent].classList.remove('active');

    // scalo gli elemnti correnti con il ++ in modo decrescente
    indexCorrent--;

    // console.log(indexCorrent)

    // se l'indice corrente è minore zero allora prosegue
    if (indexCorrent < 0 ) {

        // per tornare al punto di partenza dovrò calcolare la lunghezza della stringa - 1,
        // perchè non abbiamo 5 stringhe, quindi con il -1 viene visualizzata l'ultima immaggine
        indexCorrent = (imageSelectDomElement.length -1);
    } 

     // assegno alla imagine seguente la classe active
    imageSelectDomElement[indexCorrent].classList.add('active');

    // console.log()
})

































// const secondImageDomeElements = imageDomElements[1]


// const imageSelectDomElement = document.querySelectorAll ('.image')
// let firstCurrent = imageSelectDomElement[0]
// const moodActive = firstCurrent.classList.add('active')

// const btnDownDocElement = document.querySelector('.btn-down');
// btnDownDocElement.addEventListener ('click', function ( ) {

//     for(let i = 0; i < arrayCarousel.length; i++) {
//         firstCurrent = imageSelectDomElement[i];
//         // firstCurrent.classList.add('active')
//         firstCurrent.classList.remove('active')
//         console.log(firstCurrent)
//     }

    // for(let i = 0; i < arrayCarousel.length; i++) {
    //     firstCurrent = imageSelectDomElement[i];
    //     firstCurrent.classList.add('active');

    //     if (firstCurrent === active) {
    //         console.log()
    //     }
    // }
// })

// let selectImg = false
// for (let i = 0; i < imageDomElements.length; i++) {

//     // console.log(i)

//     const currentAct = imageDomElements[i]
//     console.log(currentAct)

//     currentAct.classList.add('active')
//     console.log(currentAct)

//     if (selectImg === )




// }

// const btnUpDocElement = document.querySelector('.btn-up');
// btnUpDocElement.addEventListener ('click', function ( ) {

// })