let  secretnumber= Math.trunc(Math.random()*50)+1;

let score=50;
let highscore=0;
document.querySelector('.check').addEventListener('click',function() {
    
    const guess =Number(document.querySelector('.guess').value);
    if(!guess) {
        document.querySelector('.message').textContent='heyy take a guess😃';

    }
    else if(guess==secretnumber){
        document.querySelector('.message').textContent='you guessed it right😎';

        document.querySelector('.number').textContent=secretnumber;
        document.querySelector('.check').style.backgroundColor='#80f968'
        document.querySelector('.again').style.backgroundColor='#80f968'
        document.querySelector('.number').style.backgroundColor='#80f968'
        document.querySelector('.guess').style.backgroundColor='#80f968'

        if(score>highscore)  {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore; 
        }

    }

    else if(guess>secretnumber){
        if(score>1){
            document.querySelector('.message').textContent='you went higher🥵';
            score-=5;
            document.querySelector('.score').textContent=score;

        }
        else{
            document.querySelector('.message').textContent='you lost the game🤡';
        }

    }
    else if(guess<secretnumber) {
        if(score>1){
            document.querySelector('.message').textContent='its cold down here🥶';
            score-=5;
            document.querySelector('.score').textContent=score;

        }
        else{
            document.querySelector('.message').textContent='you lost the game🤡';
        }

    }

})

document.querySelector('.again').addEventListener('click', function() {
    
    secretnumber=Math.trunc(Math.random()*100)+1;
    document.querySelector('.message').textContent='lets play';
    document.querySelector('.score').textContent=50;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=' ';

        document.querySelector('.check').style.backgroundColor='transparent'
        document.querySelector('.again').style.backgroundColor='transparent'
        document.querySelector('.number').style.backgroundColor='transparent'
        document.querySelector('.guess').style.backgroundColor='transparent'


      

})