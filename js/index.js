const chars = document.getElementById('chars');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets');
const films = document.getElementById('films');

fillCounters();

function fillCounters() {
    Promise.all([
        getData('people/'),
        getData('starships/'),
        getData('planets/')
    ])
    .then(data => {
        //console.log(data)
        chars.style.fontSize = '5em';
        starships.style.fontSize = '5em';
        planets.style.fontSize = '5em';

        chars.innerHTML = data[0].count;
        starships.innerHTML = data[1].count;
        planets.innerHTML = data[2].count;
    })
    .catch(err => console.log("Error:", err))
}

function getData(param) {
    return fetch(`https://swapi.dev/api/${param}`)
            .then(res => res.json())
}

function loadPhrase() {
    const btn = document.getElementById('btn-phrases');
    const phrase = document.getElementById('phrase');

    return fetch('https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
        .then(data => data.json())
        .then(json => {
            btn.innerHTML = "Read another one!";
            phrase.innerHTML = `"${json.content}"`;
            phrase.animate([
                { transform: 'translateY(-70px)'},
                { transform: 'translateY(0px)'}
            ], {
                duration: 500
            })
        })
        .catch(err => console.log("Error: ", err))
}