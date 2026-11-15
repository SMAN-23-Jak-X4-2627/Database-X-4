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

import { json , url } from "./data-handler.js";
const access = await url()

let bucket
if (id <= 6) {
    bucket = access.a1
} else if (id <= 12) {
    bucket = access.a2
} else if (id <= 18) {
    bucket = access.a3
} else if (id <= 24) {
    bucket = access.a4
} else if (id <= 30) {
    bucket = access.a5
} else {
    bucket = access.a6
}

document.getElementById("back").addEventListener("click", () => {
    window.location.href = "../index.html";
})

async function dataDisplay(data) {
    document.getElementById('photo').src = `${access.photo}${id}.jpg`
    document.getElementById('name').textContent = data.name
    
    document.getElementById('about').innerText = `Tanggal lahir: ${data.birthdate}
                                                Hobi: ${data.hobby}
                                                Hal yang ingin dicapai: ${data.goal}
                                                Artis favorit: ${data.artist}
                                                Motto: ${data.motto}
                                                
                                                Kontak saya: ${data.contact}`
    
    document.getElementById('desc').innerHTML = data.desc

    const photos = document.querySelectorAll('.gallery')
    for (let i = 0; i < photos.length; i++) {
        const h = await fetch(`${bucket}${id}/${i + 1}.jpg`)
        if (!h.ok) {
            console.log('ignore this error it works though')
            console.log(`${bucket}${id}/${i}.jpg`)
            break
        }
        // TODO: make it so that jpg can also work
        // bru i REALLY have to be the only one using png
        photos[i].src = `${bucket}${id}/${i + 1}.jpg`
        photos[i].classList.toggle('inactive')
        // i change it to jpg
    }

    const h = await fetch(`../assets/bg/${id}.jpg`)
    if (h.ok) {
        document.body.style.backgroundImage = `url("../assets/bg/${id}.jpg")`
        //nvm i'm too lazy to make these work for both png and jpg
    } else {
        document.body.style.backgroundImage = 'url("../assets/bg.jpg")'
    }

    document.getElementById('s1').src = `https://open.spotify.com/embed/track/${data.song1id}?utm_source=generator&theme=1`
    if (data.song2id != "" && data.song2id != undefined) {
        document.getElementById('s2').src = `https://open.spotify.com/embed/track/${data.song2id}?utm_source=generator&theme=1`
        document.getElementById('s2').classList.remove('inactive')
    }
    if (data.song3id != "" && data.song3id != undefined) {
        document.getElementById('s3').src = `https://open.spotify.com/embed/track/${data.song3id}?utm_source=generator&theme=1`
        document.getElementById('s3').classList.remove('inactive')
    } // i just realized the entire purpose of the song title in the data is just so that i can identify the songs to find the code for it
}

const data = await json(`${access.data}${id}.json`, 1)
await dataDisplay(data)



// spectrum visualizer
// if i have the time for it
// NOOOOOOO I DON'T