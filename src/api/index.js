import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        // Bottom left
        bl_latitude: sw.lat,
        // Top right
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '7383fbb166msh4f115b6fe77d068p163335jsn5173e31be8dd',
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
