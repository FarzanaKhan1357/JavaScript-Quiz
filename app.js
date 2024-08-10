alert("Are You Ready Javascript Quize");
var score = 0;

var firstQuestion = prompt("Question#1\nWhich operator is used to assign a value to a variable?\n a)= \nb)x \nc)- \nd)*")
if (firstQuestion == 'a') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!Answer: a)=")
}


var secondQuestion = prompt("Question#2\nIs JavaScript case-sentive? \na)No \nb)Yes")
if (secondQuestion == 'b') {
    alert("congratulation!\nYou answer is correect")
    score++
}
else {
    alert("Wrong!Answer: b)Yes")
}


var thirdQuestion= prompt('QUESTION#3\nJavaScript is the same as Java?\na) True \nb) False')
if (thirdQuestion == 'b') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert('Wrong!\nAnswer: b) False')
}




var forthQuestion = prompt("Question#4\nWhich of the following is a server-side Java Script object?\na)Function \nb)file\nc)fileupload \nd)Date")
if (forthQuestion  == 'a') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!\nAnswer: a)Function")
}


var fifthQuestion = prompt("Question#5\nHow do you declare a javaScript variable? \na)v carName; \nb)var carName; \nc)variable carName;")
if (fifthQuestion == 'b') {
    alert("congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong! \nAnswer: b)Var carName;")
}


var sixQuestion = prompt('QUESTION#6\nWhich JavaScript keyword is used to declare a variable? \na) var \nb) let \nc) const \nd) All of these')
if (sixQuestion == 'd') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!\nAnswer: d) All of these")
}


var seventhQuestion = prompt('Question#7\nWhich event occurs when the user clicks on an HTML element? \na)onclick \nb)onmouseclick \nc)onmouseover \nd)onchange')
if (seventhQuestion == 'a') {
    alert("congratulation!\nYour answer is correct")
    score++
}
else {
    alert("wrong!\nAnswer: a)onclick")
}


var eightQuestion = prompt("Question#8\nWhat will the following code return: Boolean(10>9)? \na)NaN \nb)true \nc)false")
if (eightQuestion =='b') {
    alert("congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!Answer: b)true")
}


var ninthQuestion = prompt("QUESTION#09\nInside which HTML element do we put the JavaScript?\na)<scripting> b)<script> c)<js> d)<javascript>")
if (ninthQuestion == 'b') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!Answer: b)<script>")
}


var tenthQuestion = prompt("QUESTIONS#10\nJavaScript is the same as Java?\na)False b)True")
if (tenthQuestion == 'a') {
    alert("Congratulation!\nYour answer is correct")
    score++
}
else {
    alert("Wrong!Answer:a)False ")
}


// ----------------------------------Result-----------------------------------------
if(score>=0 & score<=4){
    alert("Your score is " +score+"/10\nYou need improvement in your JavaScript knowledge. Take some time to review the concepts and try again.")
}
else if(score>=5 & score<=7){
    alert("Your score is " +score+"/10\nYour performance is satisfactory in the JavaScript quiz. Good effort! Keep practicing to enhance your skills.")
}
else if(score>=8 & score<=9){
    alert("Your score is " +score+"/10\nGreat job on the JavaScript quiz! You have a good understanding of the concepts. Keep aiming for perfection.")
}
else if(score==10){
    alert("Your score is " +score+"/10\nExcellent work on the JavaScript quiz! You have mastered the concepts perfectly. Keep up the fantastic performance!")
}












