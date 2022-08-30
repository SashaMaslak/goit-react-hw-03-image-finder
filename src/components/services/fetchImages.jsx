import axios from 'axios';

export const fetchImages = async (query, page) => {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: '28271863-d0d50fdaf1b013fa8dcdf01ae',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 12,
  });
  const images = await axios.get(`?${searchParams}`);
  return images.data.hits;
};
