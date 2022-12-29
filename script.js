let strokes = document.getElementsByClassName("stroke")
let strRes = document.getElementsByClassName("stroke_result")
let scoreText = document.getElementById("score_text")
let numOfStroke=0
let strBoxes1 = strokes[numOfStroke].children
let strBoxResult = strRes[0].children
let btnLeft = document.getElementById('btn1') 
let btnRight = document.getElementById('btn2') 
let start = document.getElementById('start') 
start.onclick = Game 
function Game(){
    do{
        //numOfStroke=0
        let randNum = Math.floor(Math.random() * 4) 
        let randRes = Math.floor(Math.random() * 4)
        let score = 0 
        let check = true
        strBoxes1[randNum].style.backgroundColor = 'black'
        strBoxResult[randRes].style.backgroundColor = 'green'
        btnRight.onclick= function(){
            randNum++
            if(randNum>3){
                randNum=3
            }else{
                strBoxes1[randNum-1].style.backgroundColor = '#333'
                strBoxes1[randNum].style.backgroundColor = 'black'
            }
        
        }
        btnLeft.onclick= function(){
            randNum--
            if(randNum<0){
                randNum=0
            }else{
                strBoxes1[randNum+1].style.backgroundColor = '#333'
                strBoxes1[randNum].style.backgroundColor = 'black'
            }
        
        }
        let timer=3000
        let interval = setInterval(function(){
            for(let i = 0; i<strBoxes1.length;i++){
                strBoxes1[i].style.backgroundColor = '#333'
            }
            for(let i = 0; i<strBoxResult.length;i++){
                strBoxResult[i].style.backgroundColor = 'red'
            }
            numOfStroke++
            if(numOfStroke===4){
                if(randNum===randRes){
                    timer-=10
                    score +=1000
                    scoreText.innerHTML = score
                    numOfStroke = 0
                    randNum = Math.floor(Math.random() * 4) 
                    randRes = Math.floor(Math.random() * 4)
                }else{
                    alert("Вы проиграли!")
                    score = 0
                    numOfStroke = 0
                    scoreText.innerHTML = score
                    check = false
                    clearInterval(interval)
                }
                
            }
            strBoxes1 = strokes[numOfStroke].children
            strBoxes1[randNum].style.backgroundColor = 'black'
            strBoxResult[randRes].style.backgroundColor = 'green'
        },timer)
    }while(check)
}


