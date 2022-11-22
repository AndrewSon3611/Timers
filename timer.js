function countDown(number) {
    let time = setInterval(function () {
        number--;
        if (number <= 0) {
            clearInterval(time);
            console.log('Done!');
        }
        else {
            console.log(number);
        }
    }, 1000)
}

function randomGame() {
    let counter = 0;
    let timer = setInterval(function () {
        let num = Math.random();
        counter++;
        if (num > .75) {
            clearInterval(timer);
            console.log(`It took ${counter} tries`)
        }
    }, 1000)
}