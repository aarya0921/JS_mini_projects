let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');

const userScore_span=document.querySelector('#user-score');
const computerScore_span=document.querySelector('#comp-score');

const draw=() => {
    console.log('It is a draw!')
    msg.innerText="It is a draw!"
    msg.style.backgroundColor='#081b31';
    msg.style.color='white';
};

const showwinner=(userwin,userchoice, computerchoice) => {
    if(userwin){
        userScore++;
        
        msg.innerText=`You win! ${userchoice} beats ${computerchoice}`
        msg.style.backgroundColor='green';
        userScore_span.innerText = userScore;
    }else{
        computerScore++;
        computerScore_span.innerText = computerScore;
        console.log(`You lose! ${computerchoice} beats ${userchoice}`);
        msg.innerText ="You Lose!!"
        msg.style.backgroundColor='red';

    }
};
const generatechoice = () =>{
    const option=['Rock','Paper','Scissors'];
    const random_nu=(Math.floor(Math.random() * 3));
    return option[random_nu];
};



 const playgame=(userchoice)=> {
     const computerchoice=generatechoice();
     if(userchoice===computerchoice){
          draw();
    }else{
            let userwin= true;
            if(userchoice === 'Rock') {
                //paper,scissor
                userwin= computerchoice === 'Paper'? false:true;
            }else if(userchoice === 'Paper'){
                //rock,scissor
                userwin= computerchoice === 'Scissors'? false:true;
            }else if(userchoice === 'Scissors'){
                userwin= computerchoice === 'Rock'? false:true;
            }
            showwinner(userwin, userchoice, computerchoice);
    }
 }  

 



choices.forEach((choice) => {
    choice.addEventListener('click',()=> {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
