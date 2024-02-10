
let initialScore1 = 0
let initialScore2 = 0
let score1 = document.getElementById("score-board1")
let score2 = document.getElementById("score-board2")

function addPoint() {
    initialScore1 += 1
   score1.textContent = initialScore1
   
  
   
}
function addPoint2() {
    initialScore1 += 2
   score1.textContent = initialScore1
   
  
}
function addPoint3() {
    initialScore1 += 3
   score1.textContent = initialScore1
   
   
}
function resetPoint() {
    
   score1.textContent = 0
   score2.textContent = 0
   initialScore1 = 0
   initialScore2 = 0
}


function addPoint1a() {
    initialScore2 += 1
   score2.textContent = initialScore2
}
function addPoint2a() {
    initialScore2 += 2
   score2.textContent = initialScore2
}
function addPoint3a() {
    initialScore2 += 3
   score2.textContent = initialScore2
}


