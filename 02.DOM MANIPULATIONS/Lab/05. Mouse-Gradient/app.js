function attachGradientEvents() {
    let result = document.querySelector('#result');
    let gradientTarget = document.querySelector('#gradient');

    function displayPercentage(e){
        const offsetX = e.offsetX;
        const widthOfTargetElement = e.target.clientWidth;
        let percent = Math.floor((offsetX / widthOfTargetElement ) * 100);
        result.textContent = `${percent}%`
    }

    function hidePercentage(){
        result.textContent = '';
    }

    gradientTarget.addEventListener('mousemove', displayPercentage);
    gradientTarget.addEventListener('mouseout', hidePercentage);
}