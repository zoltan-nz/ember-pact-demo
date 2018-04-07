import axios from 'axios';

export const getMeDogs = (endpoint) => {
  const url = endpoint.url;
  const port = endpoint.port;

  return axios.request({
    method: 'GET',
    baseURL: `${url}:${port}`,
    url: '/dogs',
    headers: { 'Accept': 'application/json' },
  });
};

export const getMeDog = (endpoint) => {
  const url = endpoint.url;
  const port = endpoint.port;

  return axios.request({
    method: 'GET',
    baseURL: `${url}:${port}`,
    url: '/dogs/1',
    headers: { 'Accept': 'application/json' },
  });
};
