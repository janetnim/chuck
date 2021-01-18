const fetch = require("node-fetch");

export default {
  categories: async() => {
    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    const data = await response.json();
    return data;
  },
  random: async(parent, args, {}, info) => {
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${args.category}`);
    const data = await response.json();
    return data;
  }
};
