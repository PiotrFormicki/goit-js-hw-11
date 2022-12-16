const axios = require('axios');

export default async function fetchImage(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '31994266-b853662bc42526dbdf3b88ff9';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios
    .get(`${url}${filter}`)
    .then(result => result.data)
    .catch(error => console.log('catch ERROR > ', error));
}
