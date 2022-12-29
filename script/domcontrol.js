init(document.querySelector('#knowledge'), document.querySelectorAll('.activeSection'))
function init (knowledgeId, sectionClass) {
    knowledgeId.children[0].removeAttribute('hidden')
    for (var i=1; i<sectionClass.length; i++) {
        sectionClass[i].children[0].hidden = true
        sectionClass[i].removeAttribute('class')
        sectionClass[i].setAttribute('class', 'inactiveSection')
    }
}
