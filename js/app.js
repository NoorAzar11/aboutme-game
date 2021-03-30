'use strict';

let userName = prompt('could you tell me your name ?');
alert('welcome to my  page ' + userName);

confirm('please answers qustions below y/yes or no/n');


let puzzle = prompt('do I like puzzle?');
// YES Yes yEs

puzzle = puzzle.toLowerCase();

if (puzzle === 'yes' || puzzle === 'y') {

    alert('your answer is ' + puzzle + '\n' + 'right , I\'m are puzzle master ');
    //console.log('puzzle master');
} else if (puzzle === 'no' || puzzle === 'n') {
    alert('get out of here');
    //console.log('get out of here');

} else {

    alert('please answer with only yes/y or no/n with no spaces');

}


let travel = prompt('do I like Traveling?');

travel = travel.toLowerCase();

if (travel === 'yes' || travel === 'y') {
    alert('correct, you are awesome');
    //console.log('you are awesome');
} else if (travel === 'no' || travel === 'n') {

    alert('you should try travling');
    //console.log('you should try traveling');

} else {

    alert('please answer with only yes/y or no/n with no spaces');

}


let age = prompt('do you think iam 10 years old?');

age = age.toUpperCase();

console.log(age);

if (age === 'YES' || age === 'Y') {
    alert('you are wrong, you should start counting');


    //console.log('you celver');
} else if (age === 'NO' || age === 'N') {

    alert('you are celever');
    //console.log('you are wrong');

} else {

    alert('please answer with only yes/y or no/n with no spaces');

}




let game = prompt('do I like video games?');

game = game.toLowerCase();

if (game === 'yes' || game === 'y') {

    alert('your answer is ' + game + '\n' + 'correct , im a video game master ');
    //console.log('video game master');
} else if (game === 'no' || game === 'n') {
    alert('get out of here, I really like Xbox');
    //console.log('just give a try');

} else {
    alert('please answer with only yes/y or no/n with no spaces');

}



let code = prompt('do I like coding?');

code = code.toLocaleLowerCase();

if (code === 'yes' || code === 'y') {
    alert('your answer is ' + code + '\n' + 'correct, im really intersted');

    //console.log('programming master');

} else if (code === 'no' || code === 'n') {

    alert('wrong, I like coding');
    //console.log('you will change your mind');

} else {
    alert('please answer with only yes/y or no/n with no spaces');

}





let coin = prompt('What has a head and a tail but no body?');

coin = coin.toLowerCase();

if (coin === 'coin') {
    alert('correct, your a genius');
    // console.log('correct, your a genius');
} else {
    alert('its a coin');
    // console.log('its a coin');
}


let fire = prompt(' If I drink, I die. If I eat, I’m fine. What am I?');
fire = fire.toLocaleLowerCase();

if (fire === 'drink') {
    alert('you are getting close');
    // console.log('you are getting close');
} else if (fire === 'die') {
    alert('almost there!');
    // console.log('almost there!');
} else if (fire === 'fire') {
    alert('correct answer');
    // console.log('correct answer');
} else {
    alert('its fire');
}

alert('Thanks for playing ' + userName);

//6th question :


let score=0;

let money=prompt('How much money do you have?' + '\n' + 'you have to guess between 1 to 10 '+ '\n' + 'you have 4 chances');

for(let i=0;i<3;i++){

console.log(score);
    
    if(money===8){
       alert('you are right!');
        score++;
     console.log(score);
      break;

    }else if(money>8){

       alert(' Too high' + '\n' + 'Try again');

        money=prompt('You have to guess between 1 and 10');

    }else if(money<8) {

       alert(' Too low' + '\n' + 'Try again');

        money=prompt('You have to guess between 1 and 10');

    } else alert('You tried 4 time,so you falied ');{

    }
}  


//7th question 

let movie=['drama','action','animation'];

for(let y=0;y<6;y++){

    let guess= prompt('could you guess what my fav movie?! drama , action, or animation ?');

    if (guess===movie[2])
    {
      alert('show my answer '+ guess+ '\n'+'you are right, animation is my favourite movie');

      score++;

      break;
    }
    else if(guess=== mydrink[0] || guess=== movie[1])

    {
        alert('show my answer '+ guess+'\n'+ 'you guessed it wrong try it again dude! ');
}

if (guess!== movie[0] || guess!== movie[1] || guess=== movie[2] )

    {
        alert(' your wrong again,get out of here ');
    }
    alert('Thanks for playing '  userName + '\n' +'Your score is '+ score+ ' from 6');
}


