import axios from "axios";

const allCharAxios = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=ca0d93a8d3be6216ce624bcd1e148ecd&hash=416b8292cb1f15f792ecd1e7b43136a0'
});

const oneCharAxios = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=ca0d93a8d3be6216ce624bcd1e148ecd&hash=416b8292cb1f15f792ecd1e7b43136a0'
});

export {
  allCharAxios,
  oneCharAxios
};
