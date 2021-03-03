import React from 'react';
import { HeroesContext } from './HeroesContext';

const InputFilter = () => {
  const { heroes, setHeroeFiltered } = React.useContext(
    HeroesContext
  );
  const [filter, setFilter] = React.useState('');

  function handleFilter(event) {
    setFilter(event.target.value);
  }

  React.useEffect(() => {
    const heroesFiltered = heroes.filter((heroe) => {
      return heroe.title.toUpperCase().includes(filter.toUpperCase());
    });
    setHeroeFiltered(heroesFiltered);
  }, [filter, heroes]);

  return (
    <input
      type="text"
      placeholder="Filtro..."
      value={filter}
      onChange={handleFilter}
    ></input>
  );
};

export default InputFilter;
