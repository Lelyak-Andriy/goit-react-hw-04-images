function fetchImages(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=23952211-93282d818c12dbc54947c6758&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => res.json());
}
const api = { fetchImages };
export default api;
