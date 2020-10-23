import React from 'react';
import { SemisectionTab } from '../SemiSectionsTab/SemisectionsTab';
import './sectionPage.scss';

type PropsTypes = {
  openMenu: boolean,
  semisectionNames: Array<string>
}

const SectionPage: React.FC<PropsTypes> = ({ openMenu, semisectionNames }) => {
  return (
    <div className={openMenu ? 'section-page' : 'section-page closed-menu'}>
      <SemisectionTab semisectionNames={semisectionNames} />
    </div>
  );
};

export { SectionPage };
