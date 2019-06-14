function stopwatch() {
    const startBtn = document.querySelector('#startBtn');
    const stopBtn = document.querySelector('#stopBtn');
    let timerDisplay = document.querySelector('#time');
    let timeInterval;


    function startTimer() {
        timerDisplay.innerHTML = '00:00';
        stopBtn.disabled = false;
        startBtn.disabled = true;
        const startTime = new Date().getTime();
        timeInterval = setInterval(getShowTime, 1000);

        function getShowTime(){
            let updatedTime = new Date().getTime();
            let  difference =  updatedTime - startTime;
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((difference % (1000 * 60)) / 1000);

            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
            timerDisplay.innerHTML = minutes + ':' + seconds;
        }
    }

    function stopTimer() {
        stopBtn.disabled = true;
        startBtn.disabled = false;
        clearInterval(timeInterval);
    }

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
}