import React from "react";

const Card = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="p-28 m-5 shadow-sm shadow-secondary-foreground flex flex-col gap-5 md:justify-center md:items-center rounded overflow-auto">
      {children}
    </div>
  );
};

export default Card;
