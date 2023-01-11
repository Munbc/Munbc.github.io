import axios from "axios"

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params:{
    api_key: "ab49808f8d6c877eb9574ac9b091fd08",
    language: "ko-KR",
  },

});

export default instance;