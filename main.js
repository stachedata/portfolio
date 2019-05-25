let projectsContainer = document.querySelector('#projectsContainer')
projectsContainer.removeChild(projectsContainer.lastChild)
let childNodes = projectsContainer.childNodes;
let projectNodes = document.querySelectorAll('.project')
let projects = [...document.querySelectorAll('.project')]
// let target = projects.lastChild
console.log(childNodes)

let options = {
    root: projectsContainer,
    rootMargin: '0px',
    threshold: 1.0
}

const callback = () => {
    // let projectsClone = projectsContainer.cloneNode(true)
    projectNodes.forEach(node => {
        projectsContainer.appendChild(node)
        console.log(node)
    })
}

let observer = new IntersectionObserver(callback, options)

observer.observe(projectsContainer.lastChild)