

const Player = document.getElementById('player');
const score = document.getElementById('score');
const Timer = document.getElementById('timer');
let RealScore = 0;
let RealTimer = 41;
let IntervalCounter = 800;
let TimeLineSound = new Audio();
let CubeSound = new Audio();
CubeSound.src = 'Sound/CubeSound.mp3';
TimeLineSound.src = 'Sound/BackgroundSoundMusic.mp3';


document.body.addEventListener('click', function() {
    TimeLineSound.play();
})


let interval = setInterval(StartTimer, IntervalCounter);




Player.addEventListener('click', function() {
    
    CubeSound.play();
    
    RealScore++;
    score.textContent = 'Score' + ' ' +  RealScore;

    let RandomPosX = Math.floor(Math.random() * 450);
    let RandomPosY = Math.floor(Math.random() * 550);
    let RandomScale = Math.floor(Math.random() * 100);

    if(RandomScale < 15) {
        RandomScale = 20;
        Player.style.width = RandomScale + 'px';
        Player.style.height = RandomScale + 'px';
    } else if (RandomScale > 70) {
        RandomScale = 55;
        Player.style.width = RandomScale + 'px';
        Player.style.height = RandomScale + 'px';
    }


    Player.style.marginLeft = RandomPosX + 'px';
    Player.style.marginTop = RandomPosY + 'px';
    Player.style.width = RandomScale + 'px';
    Player.style.height = RandomScale + 'px';
})

function StartTimer() {
    RealTimer--;
    Timer.textContent = 'Timer' + ' ' + RealTimer;

    if (RealTimer < 1) {
        EndGame();
    }
}

function StopTimer() {
    if(EndGame) {
        RealTimer == 0;
        Timer.textContent = RealTimer;
    }
}

function EndGame() {
    Swal.fire(
        'Good job!',
        'დაარეფრეშე ხელახლა დასაწყებად (Control + R)!',
        'success'
      )
      clearInterval(interval);
      
      RealScore = 0;
      score.textContent = 'Score' + ' ' +  RealScore;
}