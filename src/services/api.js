const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23950514-2b2a864c0ec6a6714acf66442';

function fetchImages(query, page) {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No results were found for ${query}`));
  });
}

const API = { fetchImages };

export default API;
