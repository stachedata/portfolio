let projectsContainer = document.querySelector('#projectsContainer')
projectsContainer.removeChild(projectsContainer.lastChild) //removes unwanted Text node
let projectNodes = document.querySelectorAll('.project')

let options = {
    root: projectsContainer,
    rootMargin: '10px',
    threshold: 1.0
}

const callback = (entries,self) => {
    projectNodes.forEach(node => {
        projectsContainer.appendChild(node.cloneNode(true)) 
    })
    entries.forEach(entry => {
        if(entry.isIntersecting){
            self.unobserve(entry.target)
            self.observe(projectsContainer.lastChild)
        }
    })
}

let observer = new IntersectionObserver(callback, options)
observer.observe(projectsContainer.lastChild)