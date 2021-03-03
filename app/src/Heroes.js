import React from 'react';
import { HeroesContext } from './HeroesContext';
import Heroe from './Heroe';
import InputFilter from './InputFilter';
import Modal from 'react-modal';
import './css/styles.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Heroes = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [heroeActive, setHeroeActive] = React.useState(null);
  const { heroesFilter } = React.useContext(HeroesContext);

  function openModal({ target }) {
    const active = heroesFilter.find((heroe) => heroe.id === Number(target.id));
    setHeroeActive(active);
    setIsOpen(true);
  }

  Modal.setAppElement('#root');

  function closeModal() {
    setIsOpen(false);
  }

  if (heroesFilter === null) return null;

  return (
    <div id="main">
      <h1>Consulta API Marvel</h1>
      <InputFilter />
      <ul>
        {heroesFilter.map((heroe) => (
          <i key={heroe.id} onClick={openModal}>
            <li id={heroe.id}>{heroe.title}</li>
          </i>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={() => setIsOpen(false)}>X</button>
        <Heroe data={heroeActive} />
      </Modal>
    </div>
  );
};

export default Heroes;
