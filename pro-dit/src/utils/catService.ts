import axios from "axios";
import catSort from "./catSort";

export const getCats = (sortBy: string, limit: number) => {
  return axios
    .get(`https://api.thecatapi.com/v1/breeds${limit ? `?limit=${limit}` : ""}`)
    .then((res) => res.data.sort(catSort(sortBy)));
};

export const getCatPicture = (id: string) => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
    .then((res) => res.data[0].url);
};

export const getRandomCat = () => {
  return axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
    const breeds = res.data;
    return breeds[Math.floor(Math.random() * breeds.length)];
  });
};

export const getRelatedCats = (id: string) => {
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
