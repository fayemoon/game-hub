import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3b110aa3cfd644a6b1c160e05cc2e361'
  }
})