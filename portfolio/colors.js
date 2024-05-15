let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('blue')
} else {
    setTheme(theme)
}

let themeDots = document.querySelectorAll('.modeBtn')

for(var i=0; themeDots.length > i; i++) {
    
themeDots[i].addEventListener('click', function() {
    let mode = this.dataset.mode
    setTheme(mode)
})
}

function setTheme(mode) {
    if (mode == 'blue') {document.getElementById('colorModes').href = 'css/style.css'
    }

    if (mode == 'green') {
        document.getElementById('colorModes').href = 'css/green.css'
    }

    if (mode == 'dark') {
        document.getElementById('colorModes').href = 'css/dark.css'
    }

    localStorage.setItem('theme', mode)
}