/**
 * Random Cat of the Day
 *
 * <https://cataas.com/>
 * <https://cataas.com/cat?json=true>
 */

const catImgEl = document.querySelector('#catImg');
const getCatBtnEl = document.querySelector('#getCatBtn');


const summonCat = async () => {
    const response = await fetch('https://cataas.com/cat?json=true');

    if (!response.ok) {
        throw new Error("I'm not okay");
    }

    const cat = await response.json();

    catImgEl.src = 'https://cataas.com' + cat.url;

    console.log(cat);
};

getCatBtnEl.addEventListener('click', () => {
    summonCat();
});