import React from 'react';

import ImgB7Web from 'assets/images/svgs/b7.svg';
import { MemoryCard } from 'types/MemoryType';
import { CardData } from 'data/CardData';

type CardMemoryProps = {
  card: MemoryCard;
  onClick: () => void;
};

const CardMemory: React.FC<CardMemoryProps> = ({ card, onClick }) => {
  return (
    <div
      style={{ height: 180 }}
      onClick={onClick}
      className={`${
        card.show || card.permanent ? 'bg-primary' : 'bg-secondary'
      } opacity-25 d-flex justify-content-center rounded-3 d-flex justify-content-center align-items-center`}
    >
      {!card.permanent && !card.show && (
        <img
          style={{ width: 100, height: 100 }}
          className={`img-fluid bg-secondary opacity-100 rounded-3`}
          src={ImgB7Web}
          alt="img b7web"
        />
      )}
      {(card.permanent || card.show) && card.card !== null && (
        <img
          style={{ width: 100, height: 100 }}
          className="img-fluid   opacity-100 rounded-3"
          src={CardData[card.card].icon}
          alt={CardData[card.card].title}
        />
      )}
    </div>
  );
};

CardMemory.defaultProps = {
  card: {
    card: 12,
    show: true,
    permanent: false,
  },
};

export { CardMemory };
