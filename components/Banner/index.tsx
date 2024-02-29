import { Character } from "@/app/characteres/models/character.model";
import sleep from "sleep-promise";

interface IParamsBanner {
  id: number;
}

export const getCharacter = (id: number): Promise<Character> => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  return fetch(url)
    .then((res) => res.json())
    .then(sleep(2500));
};

async function Banner(params: IParamsBanner) {
  const character = await getCharacter(params.id);
  return <div>Name: {character?.name}</div>;
}

export default Banner;
