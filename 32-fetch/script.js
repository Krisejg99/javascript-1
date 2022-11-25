/**
 * Fetch
 *
 */

fetch('data/cats.jsn')
    .then(response => {
        if (!response.ok) {
            throw new Error('Response was not ok... yikes')
        }
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Sorry, there was an', err);
    })