import React, { useState } from 'react';
import './Header.scss';

type PropTypes = {
    toggleMenu: Function,
    openMenu: boolean
}

const Header: React.FC<PropTypes> = ({toggleMenu, openMenu }) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <header className="header section">
      {/* TOGGLE navBar */}
      <button type="submit" onClick={() => toggleMenu(!openMenu)}>Burger</button>
      <h2 className="header_title">Almaz-Lux</h2>
      <div className="header-search">
        <input
          className="header-search_input"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          placeholder="Global Search"
        />
        <button className="header-search_btn" type="submit">Search</button>
      </div>
    </header>
  );
};

export { Header };
