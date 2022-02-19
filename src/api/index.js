import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key':
            '7383fbb166msh4f115b6fe77d068p163335jsn5173e31be8dd',
        },
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
