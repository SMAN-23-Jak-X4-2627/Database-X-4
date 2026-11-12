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
        const h = await fetch(studDir + id + '/gallery/' + (i + 1) + '.png')
        if (!h.ok) {
            console.log('ignore this error it works though')
            break
        }
        // TODO: make it so that jpg can also work
        // bru i REALLY have to be the only one using png
        photos[i].src = studDir + id + '/gallery/' + (i + 1) + '.png'
        photos[i].classList.toggle('inactive')
    }

    const h = await fetch(studDir + id + '/bg.jpg')
    if (h.ok) {
        document.body.style.backgroundImage = `url(${studDir}${id}/bg.jpg)`

        //nvm i'm too lazy to make these work for both png and jpg
    }
}

const data = await loadData(id)
await dataDisplay(data)

const s1au = document.getElementById('s1au')
const s1b = document.getElementById('s1b')
const s1sb = document.getElementById('s1sb')

const s2au = document.getElementById('s2au')
const s2b = document.getElementById('s2b')
const s2sb = document.getElementById('s2sb')

const s3au = document.getElementById('s3au')
const s3b = document.getElementById('s3b')
const s3sb = document.getElementById('s3sb')

// section for music player 1
document.getElementById('s1au').src = studDir + id + "/songs/" + data.song1id + "/au.mp3"
document.getElementById('s1t').textContent = data.song1ti
document.getElementById('s1c').src = studDir + id + "/songs/" + data.song1id + "/ca.jpg"

s1au.volume = 0.5

s1b.addEventListener('click', () => {
  if (s1au.paused) s1au.play()
  else s1au.pause()
});

s1au.addEventListener('play', () => {
    s1b.textContent = '⏸'
    s2au.pause()
    s3au.pause()
})
s1au.addEventListener('pause', () => s1b.textContent = '▶')

s1au.addEventListener('timeupdate', () => {
  const time1 = (s1au.currentTime / s1au.duration) * 100 || 0;
  s1sb.value = time1;

  const currentSeconds1 = Math.floor(s1au.currentTime) % 60
  const currentMinutes1 = Math.floor(Math.floor(s1au.currentTime) / 60)
  const durationSeconds1 = Math.floor(s1au.duration) % 60
  const durationMinutes1 = Math.floor(Math.floor(s1au.duration) / 60)

  s1tl.textContent = `${currentMinutes1}:${currentSeconds1.toString().padStart(2,'0')} / ${durationMinutes1}:${durationSeconds1.toString().padStart(2,'0')}`
});

s1sb.addEventListener('input', () => {
  s1au.currentTime = (s1sb.value / 100) * s1au.duration;
});

// section for music player 2


if (data.song2ti != "") {
    document.getElementById('s2ca').classList.toggle('inactive')
    document.getElementById('s2cb').classList.toggle('inactive')

    document.getElementById('s2au').src = studDir + id + "/songs/" + data.song2id + "/au.mp3"
    document.getElementById('s2t').textContent = data.song2ti
    document.getElementById('s2c').src = studDir + id + "/songs/" + data.song2id + "/ca.jpg"

    s2au.volume = 0.5

    s2b.addEventListener('click', () => {
        if (s2au.paused) s2au.play()
        else s2au.pause()
    });

    s2au.addEventListener('play', () => {
        s2b.textContent = '⏸'
        s1au.pause()
        s3au.pause()
    })
    s2au.addEventListener('pause', () => s2b.textContent = '▶')

    s2au.addEventListener('timeupdate', () => {
        const time2 = (s2au.currentTime / s2au.duration) * 100 || 0;
        s2sb.value = time2;

        const currentSeconds2 = Math.floor(s2au.currentTime) % 60
        const currentMinutes2 = Math.floor(Math.floor(s2au.currentTime) / 60)
        const durationSeconds2 = Math.floor(s2au.duration) % 60
        const durationMinutes2 = Math.floor(Math.floor(s2au.duration) / 60)

        s2tl.textContent = `${currentMinutes2}:${currentSeconds2.toString().padStart(2,'0')} / ${durationMinutes2}:${durationSeconds2.toString().padStart(2,'0')}`
    });

    s2sb.addEventListener('input', () => {
        s2au.currentTime = (s2sb.value / 100) * s2au.duration;
    });
}

// section for music player 3

if (data.song3ti != "") {
    document.getElementById('s3ca').classList.toggle('inactive')
    document.getElementById('s3cb').classList.toggle('inactive')

    document.getElementById('s3au').src = studDir + id + "/songs/" + data.song3id + "/au.mp3"
    document.getElementById('s3t').textContent = data.song3ti
    document.getElementById('s3c').src = studDir + id + "/songs/" + data.song3id + "/ca.jpg"

    s3au.volume = 0.5

    s3b.addEventListener('click', () => {
        if (s3au.paused) s3au.play()
        else s3au.pause()
    });

    s3au.addEventListener('play', () => {
        s3b.textContent = '⏸'
        s2au.pause()
        s1au.pause()
    })
    s3au.addEventListener('pause', () => s3b.textContent = '▶')

    s3au.addEventListener('timeupdate', () => {
        const time3 = (s3au.currentTime / s3au.duration) * 100 || 0;
        s3sb.value = time3;

        const currentSeconds3 = Math.floor(s3au.currentTime) % 60
        const currentMinutes3 = Math.floor(Math.floor(s3au.currentTime) / 60)
        const durationSeconds3 = Math.floor(s3au.duration) % 60
        const durationMinutes3 = Math.floor(Math.floor(s3au.duration) / 60)

        s3tl.textContent = `${currentMinutes3}:${currentSeconds3.toString().padStart(2,'0')} / ${durationMinutes3}:${durationSeconds3.toString().padStart(2,'0')}`
    });

    s3sb.addEventListener('input', () => {
        s3au.currentTime = (s3sb.value / 100) * s3au.duration;
    });
}

// spectrum visualizer