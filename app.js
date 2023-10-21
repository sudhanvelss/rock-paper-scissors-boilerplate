var rock = "assets/rock-hand.png"
var paper = "assets/paper-hand.png"
var scissors ="assets/scissors-hand.png"

var button1 = document.getElementById("overall1")
var button2 = document.getElementById("overall2")
var button3 = document.getElementById("overall3")

var game = document.getElementById("empty")


var one = ""
var two = ""
var three = 0
var four = 0

var score = document.getElementById("numbers")

button1.addEventListener("click", () =>{
    game.innerHTML= `<img src ="${rock}">`
    one="rock"
    comp()
})
button2.addEventListener("click", () => {
    game.innerHTML = `<img src ="${paper}">`
    one ="paper"
    comp()
})
button3.addEventListener("click",() =>{
    game.innerHTML = `<img src ="${scissors}">`
    one = "scissors"
    comp()
})

var game1 = document.getElementById("empty1")

function comp(){
    let random = Math.ceil((Math.random()*3)) 
    if(random == 1){
        game1.innerHTML = `<img src="${paper}">`
        two = "paper"
        scores()
    }
    else if(random == 2){
        game1.innerHTML = `<img src="${scissors}">`
        two = "scissors"
        scores()
    }
    else{
        game1.innerHTML = `<img src="${rock}">`
        two = "rock"
        scores()
    }
}

function scores(){
    if (one == two){
        two = two
    }
    else if(one == "rock" && two == "paper"){
        four++
    }
    else if(one == "paper" && two == "scissors"){
        four++
    }
    else if(one == "scissors" && two == "rock"){
        four++
    }
    else{
        three++
    }
    display()

}

var the =  document.getElementById("the")
var won = document.getElementById("won")
var div = document.getElementsByClassName('div')
var play = document.getElementById("wonbutton")
function display(){
    score.textContent=`${three}-${four}`
    if (four >= 5 || three >= 5){
        the.style.visibility='visible'
        button1.style.visibility='hidden'
        button2.style.visibility='hidden'
        button3.style.visibility='hidden'
    }
    if (four >= 5){
        won.textContent = "Computer Won the Game"

    }else{
        won.textContent = "You Won the Game"
    }
}
play.addEventListener("click",() => {
    location.reload()
})
