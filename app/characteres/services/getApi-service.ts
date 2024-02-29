import { Character } from "../models/character.model";
import sleep from "sleep-promise";

export const getCharacteres = (): Promise<Character[]> => {
  const url = "https://rickandmortyapi.com/api/character";

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results)
    .then(sleep(4000));
};
