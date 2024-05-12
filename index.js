let min = 1;
let max = 100;
let ans = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(ans);

let attempts = 0;
let guess = ans;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){

        window.alert(`please eneter a valid number`);
    }
    else if (guess < min || guess > max){
        window.alert(` please eneter a valid number`);
    }
    else{
        attempts++;
        if(guess < ans){
            window.alert(`TOO LOW TRY AGAIN!!!!`);
        }
        else if (guess > ans){
            window.alert(`TOO HIGH TRY AGAIN!!!!`);
        }
        else{
            window.alert(`CORRECT!! The answer was ${ans} it took you ${attempts} attempts. refresh the page to play again`);
            running = false;

        }
    }

}