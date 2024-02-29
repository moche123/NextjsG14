import { getCharacteres } from "./services/getApi-service";

export default async function Characteres() {
  const characteres = await getCharacteres();
  return (
    <>
      {characteres.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </>
  );
}
