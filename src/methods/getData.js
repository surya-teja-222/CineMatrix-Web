export default async function getData(type, searchTerm) {
    try {
        const url = "http://localhost:5000/" + type + "/?name=" + searchTerm;
        const k = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: searchTerm,
            }),
        });
        // check status code of response
        if (k.status === 200) {
            const data = await k.json();
            return JSON.stringify(data);
        } else if (k.status === 500) {
            return "";
        }
    } catch (error) {
        return "";
    }
}
