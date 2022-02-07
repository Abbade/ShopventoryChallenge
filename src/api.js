export const API_URL = 'https://dog.ceo/api';

export function DOGS_GET() {
    return {
      url: API_URL + '/breeds/list/all',
      options: {
        method: 'GET'
      },
    };
  }

  export function IMAGES_SUB_BREED_GET(breed, subBreed) {
    return {
      url: API_URL + '/breed/'+ breed +'/'+ subBreed +'/images/random',
      options: {
        method: 'GET'
      },
    };
  }

  export function IMAGES_BREED_GET(breed) {
    return {
      url: API_URL + '/breed/'+ breed + '/images/random',
      options: {
        method: 'GET'
      },
    };
  }