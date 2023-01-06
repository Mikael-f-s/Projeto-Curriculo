const knowledgeArticle = document.querySelector('#knowledge')
const knowledgeSections = document.querySelectorAll('section')
const knowledgeMenu = knowledgeArticle.children[0].children[0]
const knowledgeItens = arrayKnowledge(knowledgeMenu.children, knowledgeSections)

// Iniciando a formatação
// Muda o article knowledge para a apresentação padrão
init(knowledgeArticle, knowledgeSections)
function init (knowledgeId, sectionClass) {
    knowledgeId.children[0].removeAttribute('hidden')
    for (var i=1; i<sectionClass.length; i++) {
        sectionClass[i].children[0].hidden = true
        sectionClass[i].removeAttribute('class')
        sectionClass[i].setAttribute('class', 'inactiveSection')
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

// Hover para o article knowledge

knowledgeMenu.addEventListener("mouseover", (event) => {
    // console.log(event.target)
    if(event.target.getAttribute('id')!=null||"") {
        knowledgeAtt(event.target.getAttribute('id'),knowledgeItens)
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
