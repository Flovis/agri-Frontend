import axios from "axios";

export default axios.create({
  baseURL: `https://api.agromonitoring.com/agro/1.0/weather?lat=${latitude}&lon=${longitude}&appid=04dba98791c3cefc74d0256ec64c6bc9`,
});
