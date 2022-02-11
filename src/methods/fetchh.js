async function fetchh(input) {
    k = process.env.REACT_APP_URL + '?movie=' + input
    var k = await fetch(k)
    k = await k.json();
    return k;
}

export default fetchh;