let projectsContainer = document.querySelector('#projectsContainer')
projectsContainer.removeChild(projectsContainer.lastChild) //removes unwanted Text node
let projectNodes = document.querySelectorAll('.project')


let options = {
    root: projectsContainer,
    rootMargin: '10px',
    threshold: 1.0
}

let cloneCount = 1
const increaseCloneCount = () => document.getElementById('cloneCount').innerHTML = cloneCount++

const callback = (entries,self) => {projectNodes.forEach(node => {
    projectsContainer.appendChild(node.cloneNode(true)) 
})
entries.forEach(entry => {
    if(entry.isIntersecting){
        increaseCloneCount()
        self.unobserve(entry.target)
        self.observe(projectsContainer.lastChild)
    }
    })
}

let observer = new IntersectionObserver(callback, options)
observer.observe(projectsContainer.lastChild)