import axios from "axios";
import catSort from "./catSort";

type Cat = any & {
  id: string;
  name: string;
};

/**
 * @description Gets a bunch of cats from 'thecatapi', sorted by key `sortBy`, which may consist of e.g. 'grooming', 'dog_friendly', the amount of cats is limited by `limit`
 * @param {string} sortBy
 * @param {number} limit
 */

export const getCats = (sortBy: string, limit: number): Promise<Cat[]> => {
  return axios
    .get(`https://api.thecatapi.com/v1/breeds${limit ? `?limit=${limit}` : ""}`)
    .then((res) => res.data.sort(catSort(sortBy)));
};

/**
 * @description returns a URL pointing towards a random picture of a cat of `id` from 'thecatapi'
 * @param {number} id
 */

export const getCatPicture = (id: string): Promise<string> => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
    .then((res) => res.data[0].url);
};

/**
 * @description gets and picks a random cat from the list of breeds from 'thecatapi'
 * @param {number} id
 */

export const getRandomCat = (): Promise<Cat> => {
  return axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
    const breeds = res.data;
    return breeds[Math.floor(Math.random() * breeds.length)];
  });
};

/**
 * @description Gets the list of cat breeds from the 'thecatapi' and returns the cat that uses the `id`, plus 3 related cats, who relate to the current cat by a randomly selected 'temperament' value, also provided by the api
 * @param {number} id
 *
 */

export const getRelatedCats = (
  id: string
): Promise<{ currentCat: Cat; temperament: string; relatedCats: Cat[] }> => {
  return axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
    const breeds: [] = res.data;
    const currentCat: any = breeds.find((breed: any) => breed.id === id);

    const temperaments = currentCat.temperament.split(", ");
    const randomTemperament =
      temperaments[Math.floor(Math.random() * temperaments.length)];

    const relatedCats: never[] = breeds
      .filter(
        (breed: any) =>
          breed.temperament.includes(randomTemperament) &&
          breed.id !== currentCat.id
      )
      .filter((c, i) => i < 3);

    return {
      currentCat,
      temperament: randomTemperament,
      relatedCats,
    };
  });
};
