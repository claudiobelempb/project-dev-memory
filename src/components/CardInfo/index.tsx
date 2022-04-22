import React from 'react';

type CardInfoType = {
  label: string;
  value: string | number;
};

const CardInfo: React.FC<CardInfoType> = ({ label, value }) => {
  return (
    <>
      <span className="lead fs-6">{label}:</span>
      <h2 className="fw-bold mb-4">{value}</h2>
    </>
  );
};

export { CardInfo };
