export default function Main({ searchTerm }) {
  if (searchTerm !== "") {
    console.log("searchTerm: ", searchTerm);
  }

  return <>Search term : + {searchTerm}</>;
}
