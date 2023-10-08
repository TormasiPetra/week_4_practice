console.log("Hello world!")

//adok egy esemény figyelőt a böngészőnek, ami figyeli, hogy mikor töltődik be az oldal. utána futtassa le a dom manipulációt

function domManipulation(){
    const rootElement = document.querySelector("#root")
    console.log(rootElement)
    rootElement.innerHTML = "This is done by dom manipulation"
}

function logClick(){
    console.log('clicked')
}

let tickCount = 0

function logTick(){
    console.log(`tick ${tickCount}`)
    tickCount++
}

window.addEventListener('load', domManipulation)

window.addEventListener('click', logClick)

// window.addEventListener('click', logTick)
 

window.setInterval(logTick, 1000) //másodpercenként lefuttatja a logTick fv-t

