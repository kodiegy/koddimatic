import React from "react";

type IProps = {
  title?: string;
  description?: string;
};

export const Card: React.FC<IProps> = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
