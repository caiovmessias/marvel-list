import React from 'react';
import { HeroesStorage } from './HeroesContext';
import Heroes from './Heroes';

function App() {
  return (
    <HeroesStorage>
      <Heroes />
    </HeroesStorage>
  );
}

export default App;
