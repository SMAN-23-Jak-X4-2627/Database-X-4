console.log("i know you're here.")

import { json , url } from "./students/data-handler.js";

function studentPage(event) {
    const id = event.currentTarget.dataset.id;
    window.location.href = 'students/student.html?id=' + id;
}

const access = await url()
const nama = await json(access.nama)

let i = 0
document.querySelectorAll(".student-card").forEach(card => {
    card.addEventListener("click", studentPage)

    card.querySelector('h4').textContent = nama.nama[i]
    card.querySelector('img').src = `${access.photo}${i + 1}.jpg`
    // TODO: make it so that png can also work
    // wrtf bro everyone uses jpg :sob: :sob: nvm about it
    i++
})


if (window.innerWidth < 768 && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    alert("Tolong nyalakan mode desktop.")
}


let j = 0
document.querySelectorAll('.carousel').forEach(carousel => {
    const slides = carousel.querySelectorAll('img')
    for (let k = 0; k < slides.length; k++) {
        slides[k].src = `${access.carousel}${j + 1}/${k + 1}.jpg`
    }
    j++
    runCarousel(slides)
})
function runCarousel(imageSet) {
    let i = 0
    imageSet[i].classList.add('active')

    setInterval(() => {
        imageSet[i].classList.remove('active')
        i = (i + 1) % imageSet.length
        imageSet[i].classList.add('active')
    }, 6000)
}

const img = document.querySelectorAll("image");

img.onload = () => {
  img.style.opacity = "1";
};