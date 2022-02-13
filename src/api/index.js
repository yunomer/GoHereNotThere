import axios from 'axios';

import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  method: 'GET',
  url: URL,
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '7383fbb166msh4f115b6fe77d068p163335jsn5173e31be8dd',
  },
};

export const getPlacesData = async () => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(URL, options);
  } catch (e) {
    console.log(e);
  }
};
