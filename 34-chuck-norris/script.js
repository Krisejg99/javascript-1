/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

const btnJokeEl = document.querySelector('#btnJoke');

const getJoke = async () => {

    // Fetch returns a promise
    const response = await fetch('https://api.chucknorris.io/jokes/random');

    if (!response.ok) {
        throw new Error("I'm not okay");
    }

    const joke = await response.json();

    document.querySelector('#joke').textContent = joke.value;
}

btnJokeEl.addEventListener('click', () => {
    getJoke();
});

getJoke();