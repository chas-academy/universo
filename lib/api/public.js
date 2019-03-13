import 'isomorphic-fetch';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8000;
const ROOT_URL = dev ? `http://localhost:${port}` : 'https://universo.now.sh';

function sendRequest(path, options = {}) {
  const headers = {
    'Content-type': 'application/json; charset=UTF-8',
  };

  let data;

  fetch(
    `${ROOT_URL}${path}`,
    Object.assign({ method: 'POST', credentials: 'include' }, { headers }, options),
  )
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((response) => {
      data = response;
      return data;
    });

  return data;
}

export const getList = () =>
  sendRequest('/api/v1/public/list', {
    method: 'GET',
  });
