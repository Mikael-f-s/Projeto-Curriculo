const body = document.querySelector('body')
const knowledgeArticle = document.querySelector('#knowledge')
const knowledgeSections = knowledgeArticle.querySelectorAll('section')
const knowledgeMenu = knowledgeArticle.children[0].children[0]
const knowledgeItens = arrayKnowledge(knowledgeMenu.children, knowledgeSections)
const experienciesArticle = document.querySelector('#experiencies')
const experienciesMenu = experienciesArticle.children[1].children[0].children[0]
const experienciesH5 = experienciesArticle.querySelectorAll('.experiencieInactive')
const experienciesLisSections = experienciesArticle.querySelectorAll('section')
const experienciesDisplay = document.querySelector('#experienciesDescriptionActive')
const themeSelecter = document.querySelector("#themeSelecter").querySelector('input')
const headerGreeting = document.querySelector('#header').querySelector('p').children[0]
const headerMyAge = document.querySelector('#header').querySelector('p').children[1]
const fullDate = new Date()
const hours = fullDate.getHours()
const myBirthDate = new Date(1998,06,02)
const msToYear = 1000*60*60*24*365
const myAge = Math.floor((fullDate - myBirthDate)/msToYear)


console.log(experienciesArticle.children[0].children[0])
// Cumprimento e alterando idade do #header
greeting(hours, headerGreeting, myAge, headerMyAge)
function greeting(hours, headerGreeting, myAge, headerMyAge){
    if(hours<5 || hours>=18){
        headerGreeting.innerHTML = "boa noite,"
    }else if(hours<12){
        headerGreeting.innerHTML = "bom dia,"
    }else {
        headerGreeting.innerHTML = "boa tarde,"
    }
    headerMyAge.innerHTML = `, tenho ${myAge} anos`
}

// Muda o article knowledge para a apresentação padrão
initKnowledge(knowledgeArticle, knowledgeSections)
function initKnowledge (knowledgeId, sectionClass) {
    knowledgeId.children[0].removeAttribute('hidden')
    for (var i=1; i<sectionClass.length; i++) {
        sectionClass[i].children[0].hidden = true
        sectionClass[i].removeAttribute('class')
        sectionClass[i].setAttribute('class', 'inactiveSection')
    }
}
initExperiencies(experienciesLisSections, experienciesDisplay)
function initExperiencies (experienciesLisSections, experienciesDisplay) {
    experienciesDisplay.parentNode.removeAttribute('hidden')
    for(let i of experienciesLisSections){
        i.setAttribute('hidden','true')
    }
}

// Itens article knowledge
// coloca os itens do menu do article knowledge junto com os respectivos sections
// knowMenu é a ul do article knowledge
// knowSec são as sections do article knowledge
function arrayKnowledge (knowMenu, knowSec) {
    function KnowledgeSection(nav, section) {
        this.nav = nav,
        this.section = section
    }
    const know = []
    for (i=0; i<knowMenu.length; i++) {
        knowMenu[i].getAttribute('id')!=null||"" ? know[know.length] = new KnowledgeSection(knowMenu[i].getAttribute('id'), null) : null
    }
    for (i=0; i<knowSec.length; i++) {
        know[i].section = knowSec[i].id
    }
    return know
}

// Hover para os articles knowledge e experiencies

knowledgeMenu.addEventListener("mouseover", (event) => {
    if(event.target.getAttribute('id')!=null||"") {
        knowledgeAtt(event.target.getAttribute('id'),knowledgeItens)
    }
})

experienciesMenu.addEventListener("mouseover", (event) => {
    if(event.target.getAttribute('class')=="experiencieInactive"){
        for(i = 0; i < experienciesH5.length; i++){
            experienciesH5[i].removeAttribute('class')
            experienciesH5[i].setAttribute('class', 'experiencieInactive')
        }
        event.target.removeAttribute('class')
        event.target.setAttribute('class', 'experiencieActive')
        let text = event.target.nextElementSibling.children[0].innerText
        experiencieAtt(text, experienciesDisplay)
    }
})

// Função para atualizar os sections do article knowledge
// hoverItem é o target do mouse
// knowItens são os itens do article knowledge como uma array
function knowledgeAtt(hoverItem, knowItens) {
    for (i=0; i<knowItens.length; i++) {
       document.getElementById(knowItens[i].section).removeAttribute('class')
       hoverItem==knowItens[i].nav ?
        document.getElementById(knowItens[i].section).setAttribute('class', "activeSection") :
            document.getElementById(knowItens[i].section).setAttribute('class', 'inactiveSection')
    }
}

function experiencieAtt(text, display) {
    display.innerHTML = text
}
// Verificando e mudando o tema da pagina

themeSelecter.addEventListener('change', () => attTheme(body, themeSelecter))

function attTheme(body, themeSelecter){
    body.removeAttribute('class')
    if(themeSelecter.checked == true){
        body.setAttribute('class', 'darkTheme')
    }else {
        body.setAttribute('class', 'lightTheme')
    }
}