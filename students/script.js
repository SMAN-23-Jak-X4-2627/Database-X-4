const id = new URLSearchParams(location.search).get("id") || 22

const ext = document.getElementById('ext')
if (id == 22) {
    ext.innerHTML = "/\\<br>|<br>main dev of the site!!!"
} else if (id == 2 || id == 18 || id == 30 || id == 31) {
    ext.innerHTML = "/\\<br>|<br>part of the team who made this site!"
} else if (id == 16) {
    ext.innerHTML = "/\\<br>|<br>part of the team (?)"
} else {
    ext.innerHTML = ""
}

const studDir = '../assets/students/'

import { loadData } from "./data-handler.js";

document.getElementById("back").addEventListener("click", () => {
    window.location.href = "../index.html";
})

async function dataDisplay(data) {
    document.getElementById('photo').src = studDir + id + '/photo.jpg'
    document.getElementById('name').textContent = data.name
    
    document.getElementById('about').innerText = `Tanggal lahir: ${data.birthdate}
                                                Hobi: ${data.hobby}
                                                Hal yang ingin dicapai: ${data.goal}
                                                Artis favorit: ${data.artist}
                                                Motto: ${data.motto}
                                                
                                                Kontak saya: ${data.contact}`
    
    document.getElementById('desc').textContent = data.desc

    const photos = document.querySelectorAll('.gallery')
    for (let i = 0; i < photos.length; i++) {
        const h = await fetch(`${studDir}${id}/gallery/${i + 1}.jpg`)
        if (!h.ok) {
            console.log('ignore this error it works though')
            break
        }
        // TODO: make it so that jpg can also work
        // bru i REALLY have to be the only one using png
        photos[i].src = `${studDir}${id}/gallery/${i + 1}.jpg`
        photos[i].classList.toggle('inactive')
        // i change it to jpg
    }

    const h = await fetch(studDir + id + '/bg.jpg')
    if (h.ok) {
        document.body.style.backgroundImage = `url(${studDir}${id}/bg.jpg)`

        //nvm i'm too lazy to make these work for both png and jpg
    }

    document.getElementById('s1').src = `https://open.spotify.com/embed/track/${data.song1id}?utm_source=generator&theme=0`
    if (data.song2ti != "") {
        document.getElementById('s2').src = `https://open.spotify.com/embed/track/${data.song2id}?utm_source=generator&theme=0`
        document.getElementById('s2').classList.remove('inactive')
    }
    if (data.song3ti != "") {
        document.getElementById('s3').src = `https://open.spotify.com/embed/track/${data.song3id}?utm_source=generator&theme=0`
        document.getElementById('s3').classList.remove('inactive')
    } // i just realized the entire purpose of the song title in the data is just so that i can identify the songs to find the code for it
}

const data = await loadData(id)
await dataDisplay(data)



// spectrum visualizer
// if i have the time for it