let homeScore = document.getElementById("home-score")
let HomeOnePoint = document.getElementById("home0nepoint-btn")
let homePoints = 0
let HomeTwoPoint = document.getElementById("homeTwopoint-btn")
let HomeThreePoint = document.getElementById("homeThreepoint-btn")
let guestPoints = 0
let guestScore = document.getElementById("guest-score")
let GuestOnePoint = document.getElementById("guest0nepoint-btn")
let GuestTwoPoint = document.getElementById("guestTwopoint-btn")
let GuestThreePoint = document.getElementById("guestThreepoint-btn")

function addhomescoreby1() {
    homePoints += 1
    homeScore.textContent = homePoints
}
function addhomescoreby2() {
    homePoints += 2
    homeScore.textContent = homePoints
}
function addhomescoreby3() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function addguestscoreby1() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function addguestscoreby2() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function addguestscoreby3() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}
