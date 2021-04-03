'use strict';

let score=0;

let userName = prompt('could you tell me your name ?');
alert('welcome to my  page ' + userName);

confirm('please answers qustions below y/yes or no/n');

// quesion one 
function quesionOne() {
    
let puzzle = prompt('do I like puzzle?');
// YES Yes yEs
puzzle = puzzle.toLowerCase();

if (puzzle === 'yes' || puzzle === 'y') {

    alert('your answer is ' + puzzle + '\n' + 'right , I\'m are puzzle master ');
    score ++;
 
} else if (puzzle === 'no' || puzzle === 'n') {
    alert('get out of here');
 

} else {

    alert('please answer with only yes/y or no/n with no spaces');

}
}
quesionOne();

//question two
function questionTow(){

    let travel = prompt('do I like Traveling?');
    
    travel = travel.toLowerCase();
    
    if (travel === 'yes' || travel === 'y') {
        alert('correct, you are awesome');
        score++;
       
    } else if (travel === 'no' || travel === 'n') {
    
        alert('you should try travling');
       
    
    } else {
    
        alert('please answer with only yes/y or no/n with no spaces');
    
    }
}
questionTow();

//question three

function quesionThree(){

    let age = prompt('do you think iam 10 years old?');
    age = age.toUpperCase();
   
    if (age === 'YES' || age === 'Y') {
        alert('you are wrong, you should start counting');
        score++;
    } else if (age === 'NO' || age === 'N') {
    
        alert('you are celever');
        
    
    } else {
        alert('please answer with only yes/y or no/n with no spaces');
    }
}
    
quesionThree();

// question four

function questionFour(){


    
    let game = prompt('do I like video games?');
    
    game = game.toLowerCase();
    
    if (game === 'yes' || game === 'y') {
        alert('your answer is ' + game + '\n' + 'correct , im a video game master ');
        score++;
      
    } else if (game === 'no' || game === 'n') {
        alert('get out of here, I really like Xbox');
      
    } else {
        alert('please answer with only yes/y or no/n with no spaces');
    }
}
questionFour();

//quesion five

function questionFive(){
    let code = prompt('do I like coding?');
    code = code.toLocaleLowerCase();
    if (code === 'yes' || code === 'y') {
        alert('your answer is ' + code + '\n' + 'correct, im really intersted');
        score++;
       
    } else if (code === 'no' || code === 'n') {
        alert('wrong, I like coding');
     
    
    } else {
        alert('please answer with only yes/y or no/n with no spaces');
    }
}
questionFive();


let coin = prompt('What has a head and a tail but no body?');

coin = coin.toLowerCase();

if (coin === 'coin') {
    alert('correct, your a genius');
    
} else {
    alert('its a coin');
    
}


let fire = prompt(' If I drink, I die. If I eat, I’m fine. What am I?');
fire = fire.toLocaleLowerCase();

if (fire === 'drink') {
    alert('you are getting close');
    
} else if (fire === 'die') {
    alert('almost there!');
    
} else if (fire === 'fire') {
    alert('correct answer');
    
} else {
    alert('its fire');
}

alert('Thanks for playing ' + userName);

//6th question :
function quesionSix(){


    alert('How much money do you have?' + '\n' + 'you have to guess between 1 to 10 '+ '\n' + 'you have 4 chances');
    let money=null;
    
    for(let i=0;i<4;i++){
        money=prompt("guess number between 1 to 10");
        money=parseInt(money);
        
    
    
        
        if(money===8){
           alert('you are right!');
           score++;
        
         break;
    
        }else if(money>8){
    
           alert(' Too high' + '\n' + 'Try again');
    
        }else if(money<8) {
    
           alert(' Too low' + '\n' + 'Try again');
    
        } else { 
            alert('You tried 4 time,so you falied ');
    
        } if(i===3){
            alert("the right answer 8");
    
        }
    }
}
quesionSix();

//7th question 
function quesionSeven(){


    let guess=null;
    
    let movie=['drama','action','animation','hollywood', 'bollywood','comedies','musicals'];
    
    let attemps=6;
    
    for(let y=0;y<attemps;y++){
    
       let guess= prompt('could you guess what my fav movie?! drama , action, or animation, hollywood ,bollywoord,comdies ,musicals ?');
    
       for (let j=0;j<movie.length;j++){
    
           
        
       if(guess===movie[j]){
           alert("you are right dude" + movie);
           score ++;
           y=6;
    
       }
        
       }
    }
}
questionSeven();


alert('Thanks for playing ' + userName + '\n' +'Your score is '+ score );