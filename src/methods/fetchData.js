async function fetchData(input) {
    const data = await fetch(process.env.REACT_APP_URL + '?movie=' + input);

    if (!data.ok) return [];
    return data.json();
}

export default fetchData;
