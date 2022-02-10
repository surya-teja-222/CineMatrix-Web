async function fetchh(input) {
    var k = await fetch('https://cinematrix.azurewebsites.net/api/getmovies/?movie=' + input)
    k = await k.json();
    return k;
}

export default fetchh;