// api 관리

import axios from 'axios';

const api = axios.create({
    //baseURL: '',

  });



// 검색바 API: get 
export const searchApartments = (searchTerm) => {
    return api.get('/apartments/search', { params: { q: searchTerm } });
  };

// 아파트 정보를 가져올 API : get
export const getApartments = () => api.get('/apartments');
export const getApartmentDetails = (id) => api.get(`/apartments/${id}`);

export default api;
