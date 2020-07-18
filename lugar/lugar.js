const axios = require('axios');

    const getLugarLatLng = async( dir ) => {

    const encodeUrl = encodeURI( dir );
    // console.log(encodeUrl);

    const instance = axios.create({
      baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
      // timeout: 1000,
      headers: {'x-rapidapi-key': 'f5c6cf0015mshd897ec4983ac69bp16d2e3jsn47051a34ba56'}
    });

   const resp = await instance.get();
    if ( resp.data.Results.length === 0) {
      throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = res.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
       

        return {
          direccion,
          lat,
          lng
        }
}

  module.exports = {
    getLugarLatLng
  }


