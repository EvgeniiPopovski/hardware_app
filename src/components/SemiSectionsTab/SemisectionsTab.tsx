import React from 'react';
import './sectionsTabs.scss';

type PropsType = {
    semisectionNames: Array<string>
}

const SemisectionTab: React.FC<PropsType> = ({ semisectionNames }) => {
  return (
    <ul className="section-tab">
      {semisectionNames.map((sectionName, index: number) => (
        <li
          className="section-tab_item"
          key={index}
        >{sectionName}
        </li>
      ))}
    </ul>
  );
};

export { SemisectionTab };
