/**
 * Timers
 *
 */

const btnScareMe = document.querySelector('#btnScareMe');
const ghostEl = document.querySelector('#ghost');

const getRandomNumber = () => {
    return Math.ceil(Math.random() * 10) * 1000;
}



btnScareMe.addEventListener('click', () => {

    btnScareMe.classList.add('hide');
    setTimeout( () => {

        ghostEl.classList.remove('hide');

        setTimeout( () => {
        
            ghostEl.classList.add('hide');
            btnScareMe.classList.remove('hide');
        }, 3000);
    }, getRandomNumber());
});
