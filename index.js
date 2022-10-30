


let homeScore = document.getElementById("home-score")


let home = 0
let guest = 0
function plus1(){
    
    home+=1
    homeScore.textContent = home
    
}

function plus2(){
    
    home+=2
    homeScore.textContent = home
    
}

function plus3(){
    
    home+=3
    homeScore.textContent = home
    
}


let guestScore = document.getElementById("guest-score")
function add1()
{
    guest+=1
    guestScore.textContent = guest
}
function add2()
{
    guest+=2
    guestScore.textContent = guest
}
function add3()
{
    guest+=3
    guestScore.textContent = guest
}

