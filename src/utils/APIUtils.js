import { ACCESS_TOKEN } from '../Const';
import keycloak from '../keyclock';

const request = (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      'Authorization',
      // "Bearer " + localStorage.getItem(ACCESS_TOKEN)
      'Bearer ' + keycloak.token,
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    }),
  );
};

export function getDefaultAxiosJsonConfig() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  console.log('getDefaultAxiosJsonConfig, keyclock : ', keycloak);
  // if (localStorage.getItem(ACCESS_TOKEN)) {
  if (keycloak && keycloak.token) {
    config.headers['Authorization'] = 'Bearer ' + keycloak.token;
  }

  return config;
}

export function getDefaultAxiosFormDataConfig() {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  // if (localStorage.getItem(ACCESS_TOKEN)) {
  if (keycloak && keycloak.token) {
    config.headers['Authorization'] = 'Bearer ' + keycloak.token;
  }

  return config;
}

export function getDefaultHeaderWithAuthorization() {
  const headers = {};

  // if (localStorage.getItem(ACCESS_TOKEN)) {
  if (keycloak && keycloak.token) {
    headers['Authorization'] = 'Bearer ' + keycloak.token;
  }

  return headers;
}
