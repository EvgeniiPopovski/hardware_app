import React from 'react';
import './MainPage.scss';

type PropTypes ={
    openMenu: boolean
}

const MainPage: React.FC<PropTypes> = ({ openMenu }) => {
  return (
    <main className={openMenu ? 'main-page section' : 'main-page closed-menu section'}>
      <section className="main-page_slaider">Slider</section>
      <section className="main-page_new">New</section>
      <section className="main-page_stock">Stock</section>
    </main>
  );
};

export { MainPage };
