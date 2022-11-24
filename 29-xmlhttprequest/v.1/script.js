/**
 * XMLHttpRequest
 *
 */

const getUsers = (callback) => {
    // create a new XML Http Request
    const request = new XMLHttpRequest();

    const usersEl = document.querySelector('#users');

    // Attach an event-listener to the request
    request.addEventListener('readystatechange', () => {
        // Is request done?
        if (request.readyState === 4) {
            // YAY DONE!
            console.log('Gots me sum data', request);

            // Was the request successful?
            if (request.status === 200) {
                // 200 OK
                console.log("YAY SUCCESS")

                // take the STRING in responseText and PARSE it into JavaScript object
                const data = JSON.parse(request.responseText)

                // invoke(kalla på) callback
                callback();

                // console.log("Data:", data);

                data.forEach(user => usersEl.innerHTML += `<li>${user.name}</li>`);

            }
            else {
                // Something went wrong :'(
                console.log("ERROR ERROR DANGER WILL ROBINSON!");
            }
        }
    });

    // Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');

    // Send the request
    request.send();

    console.log('Request sent!');
};

// Get users
getUsers(() => {
    console.log('Hello this is dog')
});

// Done?
console.log("All requests sent!");