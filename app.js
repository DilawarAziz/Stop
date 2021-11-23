var m_second = 0;
var second = 0;
var minute = 0;
var parent = document.getElementById("parent1")
var ul = document.getElementById("lap-ul");
var clearbtn = document.getElementById("clear");
var m_sec = document.getElementById("m_sec")
var sec = document.getElementById("sec")
var min = document.getElementById("min")

function timer() {
    m_second++;
    m_sec.innerHTML = m_second

    if (m_second === 99) {
        second++
        sec.innerHTML = second
        m_second = ""
    }
    else if (second === 60) {
        minute++
        min.innerHTML = minute
        second = ""
    }

}
var inte;

function start() {
    inte = setInterval(timer, 10)
    var start = document.getElementById("start")
    var hidden = document.getElementById("hidden")

    hidden.setAttribute("onclick", "stop()")
    hidden.className += ' inline btn'
    start.className = 'display'

    parent.style.animation= "harry 3s ease-in 1s infinite backwards"; 
   
}

function stop() {
    clearInterval(inte)
    var hidden = document.getElementById("hidden")
    var start = document.getElementById("start")
    start.className += ' inline btn'
    hidden.className = 'display'
    parent.style.animation="none"
    start.style.animation= "harry1 3s ease-in 1s infinite backwards"; 
}

function reset() {
    var hidden = document.getElementById("hidden")
    var start = document.getElementById("start")
    start.className += ' inline btn'
    hidden.className = 'display'
    clearInterval(inte)
 m_second = 0;
 second = 0;
 minute = 0;
    m_sec.innerHTML = "00"
    sec.innerHTML = "00"
    min.innerHTML = "00"
    ul.innerHTML=""
    parent.style.animation="none"
    hidden.style.animation="none"
    start.style.animation="none"
    clearbtn.style.display="none"
 
}
function lap() {
    
    var li = document.createElement("li");
    ul.appendChild(li)

   var text = document.createTextNode(min.innerHTML+" "+": "+sec.innerHTML+" "+": "+" "+ m_sec.innerHTML)
   li.appendChild(text)
   var cl = ul.firstChild
   ul.insertBefore(li,cl)
   clearbtn.style.display="inline-block"

}
function clearall() {
    ul.innerHTML=""
    clearbtn.style.display="none"

    console.log(  ul.innerHTML)
}




