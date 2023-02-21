let count1 = document.getElementById("home__score")
let count2 = document.getElementById("guest__score")

let val_1=0
let val_2=0

// for home 

function home_1() {
    val_1+=1
    count1.textContent=val_1
}

function home_2() {
    val_1+=2
    count1.textContent=val_1
}

function home_3() {
    val_1+=3
    count1.textContent=val_1
}

// for guest 

function guest_1() {
    val_2+=1
    count2.textContent=val_2
}

function guest_2() {
    val_2+=2
    count2.textContent=val_2
}

function guest_3() {
    val_2+=3
    count2.textContent=val_2
}

// for reset 

function reset() {
    val_1=0
    val_2=0
    count1.textContent=0
    count2.textContent=0
    count1.style.backgroundColor='black'
    count1.style.backgroundColor='black'
}

function newgame() {
    if(val_1>val_2) 
        count1.style.backgroundColor='#9CFF2E'
    else
        count2.style.backgroundColor='#9CFF2E'
}