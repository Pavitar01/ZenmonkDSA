import axios from "axios";

export const fetchdays = (lon, lat) => {
  let apikey2 = "pXCdNfncwqEco07ak4kN7xzVPNm0pcNs";
  console.log(lon,lon)
  return axios.get(
    `https://api.tomorrow.io/v4/timelines?location=${lon},${lat}&fields=temperature&timesteps=1h&units=metric&apikey=${apikey2}`
  );
};