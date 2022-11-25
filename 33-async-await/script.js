/**
 * async/await
 *
 */

// fetch('data/cats.jsn')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Response was not ok... yikes')
//         }
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Sorry, there was an', err);
//     })

const getJSON = async url => {
    //fetch url
    const response = await fetch(url);

    // check if response was ok
    if (!response.ok) {
        throw new Error('Response was not ok... yikes')
    };

    // parse from json
    const data = await response.json();

    return data;
};

const res = getJSON('data/dogs.json')
    .then(data => {
        console.log('data:', data);
    });


console.log('res:', res);