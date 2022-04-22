import React from 'react';

type ButtonType = {
  label: string;
  icon?: string;
  onCLick: () => void;
};

const Button: React.FC<ButtonType> = ({ label, icon, onCLick }) => {
  return (
    <button
      style={{ width: 200, height: 40 }}
      onClick={onCLick}
      className=" btn btn-primary text-white position-relative"
    >
      <span className="text-center d-flex justify-content-center align-items-center ">
        {label}
      </span>
      {icon && (
        <img
          width={40}
          height={40}
          className="img-fluid p-2 position-absolute top-0 start-0 border-end"
          src={icon}
          alt="restart"
        />
      )}
    </button>
  );
};

export { Button };
