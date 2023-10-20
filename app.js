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
function display(){
    score.textContent=`${three}-${four}`
    
}
