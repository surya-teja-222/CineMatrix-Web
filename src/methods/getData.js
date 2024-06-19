export default async function getData(type, searchTerm) {
	try {
		const url = process.env.REACT_APP_DATA_BASE_URL +
			"/" +
			type +
			"/?name=" +
			searchTerm;
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: searchTerm }),
		});
		if (res.ok) {
			const data = await res.json();
			return data;
		} else {
			throw new Error("Error");
		}
	} catch (error) {
		return null;
	}
}
