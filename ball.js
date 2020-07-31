// grab the relevant elements
const getAnswer = document.getElementById('answer');
const animation = document.getElementsByClassName('ball');
const ball = document.getElementById('ball');
const btn = document.getElementById('res');

// define functions

const ballAnimation = function () {
    const ballShake = function () {
        animation[0].animate([
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(20px)' }
        ], {
            duration: 100,
            iterations: 5
        });
    }
    ballShake();

    const fadeWhite = function () {
        const fade = document.getElementById('white-part');
        const fadeIn = document.getElementsByClassName('answers');
        const opa = 0;
        if (opa === 0) {
            fade.style.opacity = 0;
            fadeIn[0].style.opacity = 1;
        }
    }
    getAnswer.innerHTML = generateAnswer();
    fadeWhite();
    event.preventDefault();
}

const generateAnswer = function () {
    const answers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];

    const randomAnswer = answers[Math.floor(answers.length * Math.random())];

    return randomAnswer;
}

const ballReset = function () {
    const ballShakes = function () {
        animation[0].animate([
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(20px)' }
        ], {
            duration: 100,
            iterations: 5
        });

    }
    ballShakes();

    const fadeBack = function () {
        const fade = document.getElementById('white-part');
        const fadeIn = document.getElementsByClassName('answers');
        let opa = 1;
        if (opa === 1) {
            fadeIn[0].style.opacity = 0;
            fade.style.opacity = 1;
        }
    }
    fadeBack();
    event.preventDefault();
}

const resetField = function () {
    const resFunc = function () {
        document.getElementById('askSomething').value = '';
    }
    resFunc();
    event.preventDefault();
}


// add event listener
ball.addEventListener("click", ballAnimation)
btn.addEventListener("click", ballReset)
btn.addEventListener("click", resetField);
