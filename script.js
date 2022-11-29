'use strict';

// document.querySelector('.message').textContent=
// 'Betta start guessing boy!!😈';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);
const random=function(){
   const randomNumber= Math.trunc(Math.random()*30)+1;
   return randomNumber;
}  ;
let fixScore=30;
let max=1;
const tooManyTries=function(){
    document.querySelector('.score').textContent=`☠️ You lost the game :PP`;
};

let number=random();
const checkNumber=function(){
    
    console.log(number);
    console.log(document.querySelector('.guess').value);
    const guess=Number (document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent=
        '⛔No number bici';

    }
    else if( guess === number)
    {
        document.querySelector('.message').textContent=
        `🥳Congrats the number is indeed ${number}`;
        document.querySelector('.score').textContent=fixScore;
      let highScore=function(score){
        if(score>max)
        max=score;
        return max;
      };
      document.querySelector('.highscore').textContent=
       highScore(Number(document.querySelector('.score').textContent));
       document.querySelector('body').style.backgroundColor='#60b347';
       document.querySelector('.number').textContent=number;
       document.querySelector('.number').style.width='30rem';
       
      return;
        
    }
    else if( guess>number)
    {
        if(fixScore>1){
            document.querySelector('.message').textContent=
            `📈TO HIGH MAN `;
          fixScore--;
          document.querySelector('.score').textContent=fixScore;
        }
        else 
            tooManyTries();

    }
    else if( guess<number)
    {
        if(fixScore>1){
            document.querySelector('.message').textContent=
            `📉LOW LOW LOW `;
            fixScore--;
            document.querySelector('.score').textContent=fixScore;

        }
        else 
             tooManyTries();
      

    }

};
document.querySelector('.check').addEventListener
('click',checkNumber);



const againButton=function(){
   
     number=random();
    fixScore=30;
    document.querySelector('.score').textContent=30;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.guess').value='';
    
    
    

};

document.querySelector('.again').addEventListener
('click',againButton);

