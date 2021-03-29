'use strict'

let userName=prompt('could you tell me your name ?');
alert('welcome to my  page ' +userName);
confirm('please answers qustions below');

let puzzle=prompt('do you like puzzle?');
puzzle=puzzle.toLocaleLowerCase();
if(puzzle=='yes'||puzzle==='y'){
    
    alert('your answer is '+ puzzle+ '\n'+ 'right , You are puzzle master ');
    //console.log('puzzle master');
}else if(puzzle==='no'||puzzle==='n'){
    alert('get out of here');
    //console.log('get out of here');

}
alert('that sounds great');

let travel=prompt('do you like puzzle?');
travel=travel.toLocaleLowerCase();
if(travel=='yes'||travel==='y'){
    alert('you are awesome');
    //console.log('you are awesome');
}else if(travel==='no'||travel==='n'){

    alert('you should try travling');
    //console.log('you should try traveling');

}else{

alert('this is amazing news');

}


let age=prompt('do you think iam 10 years old?');
age=age.toLowerCase();

if(age==='Yes'||age==='Y'){
    alert('you are celever');
    //console.log('you celver');
}else if(age==='No'||age==='N'){

    alert('you are wrong');
    //console.log('you are wrong');

}else{

alert('you should start counting');

}

let game=prompt('do you like video games?');
game=game.toLocaleLowerCase();
if(game=='yes'||game==='y'){
    
    alert('your answer is '+ game+ '\n'+ 'awesome , You are video game master ');
    //console.log('video game master');
}else if(game==='no'||game==='n'){
    alert('go try xbox');
    //console.log('just give a try');

}else{
    alert('get out of here ');

}

let code=prompt('do you like coding?');
code=code.toLocaleLowerCase();
if(code=='yes'||code==='y'){
    
    alert('your answer is '+ code+ '\n'+ 'programming , You are programming master ');
    //console.log('programming master');
}else if(code==='no'||code==='n'){
    alert('read js css html');
    //console.log('you will change your mind');

}




let coin=confirm('What has a head and a tail but no body?');
if(coin==='head'){
    console.log('does it have a head?');
}else{
console.log('its a coin');
}


let fire=prompt(' If I drink, I die. If I eat, I’m fine. What am I?');
ire=fire.toLocaleLowerCase();
if(fire==='drink'){
 console.log('you are getting close');
}else if(fire==='die'){
    console.log('almost there!');
}else{
    alert('its fire');
