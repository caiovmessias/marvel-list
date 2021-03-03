import React from 'react';

const timeStamp = '1610829243';
const apiKey = '6134690c8329a500411e4c7e4bcf74f7';
const hash = '40d8224fb59df9852b41e730b8be3913';

export const HeroesContext = React.createContext();

export const HeroesStorage = ({ children }) => {
  const [heroes, setHeroes] = React.useState(null);
  const [heroesFilter, setHeroesFilter] = React.useState(null);

  React.useEffect(() => {
    async function searchDataApi() {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
      );
      const json = await response.json();
      setHeroes(json.data.results);
      setHeroesFilter(json.data.results);
    }

    searchDataApi();
  }, []);

  function setHeroeFiltered(newHeroes) {
    setHeroesFilter(newHeroes);
  }

  return (
    <HeroesContext.Provider value={{ heroes, heroesFilter, setHeroeFiltered }}>
      {children}
    </HeroesContext.Provider>
  );
};
