console.log("i know you're here.")

const namaPendek = [
    '***REMOVED***', '***REMOVED***', '***REMOVED***', '***REMOVED***',
    'Alfa', 'Alif', 'Anisa', '***REMOVED***',
    'Armitha', 'Azizah', 'Chelsie', '***REMOVED***',
    '***REMOVED***', 'Galuh', 'Gilang', 'Hasbi',
    '***REMOVED***', 'Kiori', '***REMOVED***', '***REMOVED***',
    '***REMOVED***', '***REMOVED***', '***REMOVED***', '***REMOVED***',
    '***REMOVED***', 'Nabila', 'Nadine', 'Nesya',
    '***REMOVED***', 'Putri', 'Samari', 'Sarah',
    'Sharon', '***REMOVED***', 'Theodora', 'Zaskia'
]

function studentPage(event) {
    const id = event.currentTarget.dataset.id;
    window.location.href = 'students/student.html?id=' + id;
}

let i = 0
document.querySelectorAll(".student-card").forEach(card => {
    card.addEventListener("click", studentPage)

    card.querySelector('h4').textContent = namaPendek[i]
    card.querySelector('img').src = `assets/students/${i + 1}/photo.jpg`
    // TODO: make it so that png can also work
    // wrtf bro everyone uses jpg :sob: :sob: nvm about it
    i++
})


if (window.innerWidth < 768 && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    alert("Tolong nyalakan mode desktop.")
}


document.querySelectorAll('.carousel').forEach(carousel => {
    const slides = carousel.querySelectorAll('img')
    runCarousel(slides)
})
function runCarousel(imageSet) {
    let i = 0
    imageSet[i].classList.add('active')

    setInterval(() => {
        imageSet[i].classList.remove('active')
        i = (i + 1) % imageSet.length
        imageSet[i].classList.add('active')
        console.log('i towkrs')
    }, 6000)
}