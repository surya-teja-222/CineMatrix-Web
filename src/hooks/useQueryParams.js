export default function useQueryParams() {
  const search = window.location.search;
  const params = new URLSearchParams(search);

  return {
    searchTerm: params.get("searchTerm"),
  };
}
