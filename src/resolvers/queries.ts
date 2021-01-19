import fetch from 'node-fetch';
const url: string = 'https://api.chucknorris.io';

export default {
  categories: async() => {
    const response = await fetch(`${url}/jokes/categories`);
    const categories = await response.json();
    return { categories };
  },
  random: async(parent, args) => {
    const response = await fetch(`${url}/jokes/random?category=${args.category}`);
    const joke = await response.json();
    return joke;
  }
};
